import {Redirect, Link, router} from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View, Text, TouchableOpacity } from "react-native";

import { useLanguageStore } from "@/store/languageStore";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [session, setSession] = useState<Session | null>(null);
  const [isAuthLoaded, setIsAuthLoaded] = useState(false);
  const { selectedLanguage, clearLanguage } = useLanguageStore();
  const [languageHydrated, setLanguageHydrated] = useState(
      useLanguageStore.persist.hasHydrated()
  );

  const handleClearStorage = async () => {
    await clearLanguage();
    // Also clearing entire AsyncStorage as requested for "clear async storage"
    const AsyncStorage = (await import("@react-native-async-storage/async-storage")).default;
    await AsyncStorage.clear();
    router.replace("/language-select");
  };

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

  if (!session) {
    return <Redirect href="/onboarding" />;
  }

  // If we have a session but no language, redirect to language selection
  if (!selectedLanguage) {
    return <Redirect href="/language-select" />;
  }

  return <Redirect href="/(tabs)" />;
}