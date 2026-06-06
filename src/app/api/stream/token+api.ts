import { createHmac } from "crypto";
import { supabaseServer } from "@/lib/supabase-server";

function base64urlEncode(input: string): string {
    return Buffer.from(input)
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");
}

function generateStreamToken(userId: string, secret: string): string {
    const header = base64urlEncode(JSON.stringify({ alg: "HS256", typ: "JWT" }));
    const iat = Math.floor(Date.now() / 1000);
    const exp = iat + 3600;
    const payload = base64urlEncode(JSON.stringify({ user_id: userId, iat, exp }));
    const signingInput = `${header}.${payload}`;
    const sig = createHmac("sha256", secret)
        .update(signingInput)
        .digest("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");
    return `${signingInput}.${sig}`;
}


async function verifySupabaseToken(token: string): Promise<string | null> {
    try {
        const { data: { user }, error } = await supabaseServer.auth.getUser(token);
        if (error || !user) {
            console.error("[stream-token] Supabase verification error:", error);
            return null;
        }
        return user.id;
    } catch (err) {
        console.error("[stream-token] Supabase verification exception:", err);
        return null;
    }
}

// v10 - AGGRESSIVE CACHE BREAK AND ID SHORTENING
export async function POST(request: Request): Promise<Response> {
    console.log(`[stream-token] INCOMING REQUEST v10: ${request.method} ${request.url}`);
    const authHeader = request.headers.get("Authorization");
    console.log(`[stream-token] Auth Header: ${authHeader ? "Present" : "Missing"}`);
    const supabaseToken = authHeader?.startsWith("Bearer ")
        ? authHeader.slice(7)
        : null;

    if (!supabaseToken) {
        console.log(`[stream-token] REJECTED: No token`);
        return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = await verifySupabaseToken(supabaseToken);
    if (!userId) {
        console.log(`[stream-token] REJECTED: Token verification failed`);
        return Response.json({ error: "Forbidden" }, { status: 403 });
    }

    console.log(`[stream-token] AUTH SUCCESS: userId=${userId}`);

    let body: any;
    try {
        body = await request.json();
    } catch {
        return Response.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const { action, callId, callType = "audio_room", sessionId, lessonId, languageCode } = body;

    console.log(`[stream-token] POST action=${action} callId=${callId} userId=${userId} lessonId=${lessonId} lang=${languageCode}`);

    // Agent Session Management
    const agentUrl = process.env.AGENT_SERVER_URL || "http://127.0.0.1:8000";

    if (action === "agent_start") {
        if (!callId) {
            return Response.json({ error: "callId is required" }, { status: 400 });
        }
        try {
            const res = await fetch(`${agentUrl}/calls/${encodeURIComponent(callId)}/sessions`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ call_type: callType }),
            });
            if (!res.ok) {
                const text = await res.text();
                return Response.json({ error: text }, { status: res.status });
            }
            const data = await res.json();
            return Response.json(data);
        } catch (err) {
            return Response.json({ error: `Agent server unreachable at ${agentUrl}: ${err}` }, { status: 503 });
        }
    }

    if (action === "agent_stop") {
        if (!callId || !sessionId) {
            return Response.json({ error: "callId and sessionId are required" }, { status: 400 });
        }
        try {
            const res = await fetch(`${agentUrl}/calls/${encodeURIComponent(callId)}/sessions/${encodeURIComponent(sessionId)}`, {
                method: "DELETE",
            });
            if (!res.ok && res.status !== 404) {
                const text = await res.text();
                return Response.json({ error: text }, { status: res.status });
            }
            return Response.json({ ok: true });
        } catch (err) {
            return Response.json({ error: `Agent server unreachable at ${agentUrl}: ${err}` }, { status: 503 });
        }
    }

    // Default: Generate Stream Token
    const secret = process.env.STREAM_API_SECRET || process.env.STREAM_API_SECRECT;
    const apiKey = process.env.STREAM_API_KEY;

    if (!secret || !apiKey) {
        return Response.json({ error: "Stream not configured" }, { status: 500 });
    }

    const bodyLessonId = body.lessonId || lessonId;
    const bodyLanguageCode = body.languageCode || languageCode;
    const token = generateStreamToken(userId, secret);
    const safeUserId = userId.replace(/[^a-z0-9_-]/gi, "_");
    
    // v10 - EXTREME SHORTENING
    // UUID is 36. l- is 2. Random is 6. Total 44.
    // We remove lessonId and languageCode from the ID itself to be safe,
    // since they are already in the call custom data.
    // However, the user provided an ID: lesson-en-lesson-en-lesson-1-ecb588a8-5655-4204-aac3-de1cdda23f81
    // which is 67 chars. We must ensure it's under 64.
    const shortRandom = Math.random().toString(36).substring(7, 13);
    const shortUserId = safeUserId.split("_")[0]; // Use split("_") because safeUserId has underscores
    
    // EXTREME CACHE BUSTER: include timestamp in ID to ensure it's fresh
    const timestamp = Date.now().toString(36).slice(-4);
    const finalCallId = `l-${shortUserId}-${bodyLessonId || "1"}-${timestamp}-${shortRandom}`.slice(0, 60);

    console.log(`[stream-token] GENERATED callId=${finalCallId} (length=${finalCallId.length})`);

    return Response.json({ token, apiKey, callId: finalCallId });
}