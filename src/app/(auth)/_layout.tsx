import { supabase } from "@/lib/supabase";
import { Redirect, Stack } from "expo-router";
import { useEffect, useState } from "react";

export default function AuthLayout() {
    const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setIsSignedIn(!!session);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setIsSignedIn(!!session);
        });

        return () => subscription.unsubscribe();
    }, []);

    if (isSignedIn === null) {
        return null;
    }

    if (isSignedIn) {
        return <Redirect href="/" />;
    }

    return <Stack screenOptions={{ headerShown: false }} />;
}