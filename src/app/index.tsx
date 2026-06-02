import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import { useLanguageStore } from "@/store/languageStore";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";

export default function Index() {
  const [session, setSession] = useState<Session | null>(null);
  const [isAuthLoaded, setIsAuthLoaded] = useState(false);
  const { selectedLanguage } = useLanguageStore();
  const [languageHydrated, setLanguageHydrated] = useState(
      useLanguageStore.persist.hasHydrated()
  );

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsAuthLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (languageHydrated) return;
    return useLanguageStore.persist.onFinishHydration(() =>
        setLanguageHydrated(true)
    );
  }, [languageHydrated]);

  if (!isAuthLoaded || !languageHydrated) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color="#6c4ef5" />
        </View>
    );
  }

  console.log("Session:", session);

  if (!session) {
    return <Redirect href="/onboarding" />;
  }

  console.log("Selected language:", selectedLanguage);

  if (!selectedLanguage) {
    return <Redirect href="/language-select" />;
  }

  return <Redirect href="/(tabs)" />;
}