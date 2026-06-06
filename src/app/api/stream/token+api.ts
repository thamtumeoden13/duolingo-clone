const apiKey = process.env.STREAM_API_KEY!;
const apiSecret = process.env.STREAM_API_SECRECT || process.env.STREAM_API_SECRET!;

async function base64UrlEncode(str: string | Buffer): Promise<string> {
  const buffer = typeof str === 'string' ? Buffer.from(str) : str;
  return buffer.toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

async function createToken(userId: string, secret: string) {
  const header = { alg: 'HS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    user_id: userId,
    iat: now,
    exp: now + 3600, // 1 hour
  };

  const encodedHeader = await base64UrlEncode(JSON.stringify(header));
  const encodedPayload = await base64UrlEncode(JSON.stringify(payload));
  const signatureInput = `${encodedHeader}.${encodedPayload}`;

  const crypto = require('crypto');
  const signature = crypto
    .createHmac('sha256', secret)
    .update(signatureInput)
    .digest();
  
  const encodedSignature = await base64UrlEncode(signature);
  return `${signatureInput}.${encodedSignature}`;
}

export async function POST(request: Request) {
  try {
    const { userId, lessonId, languageCode } = await request.json();

    if (!userId) {
      return Response.json({ error: "User ID is required" }, { status: 400 });
    }

    const token = await createToken(userId, apiSecret);
    const callId = `audio_lesson_${lessonId}_${languageCode}_${userId.replace(/[^a-z0-9_-]/gi, '_')}`;

    return Response.json({
      token,
      callId,
      apiKey,
    });
  } catch (error: any) {
    console.error("Error generating Stream token:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
