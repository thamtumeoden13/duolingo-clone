import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { supabase } from "@/lib/supabase";
import { useLanguageStore } from "@/store/languageStore";
import { useLearningStore } from "@/store/learningStore";
import { LANGUAGES } from "@/data/languages";
import { UNITS } from "@/data/units";
import { colors } from "@/constants/theme";
import { LanguageCode } from "@/types/learning";

// Import separate components
import { HomeHeader } from "@/components/HomeHeader";
import { DailyGoalCard } from "@/components/DailyGoalCard";
import { ContinueLearningCard } from "@/components/ContinueLearningCard";
import { TodayPlan } from "@/components/TodayPlan";
import { NextUpCard } from "@/components/NextUpCard";

function getGreeting(langCode: LanguageCode | null): string {
  switch (langCode) {
    case "es":
      return "Hola";
    case "fr":
      return "Bonjour";
    case "ja":
      return "こんにちは";
    case "de":
      return "Hallo";
    default:
      return "Hello";
  }
}

export default function HomeScreen() {
  const router = useRouter();
  const { selectedLanguage, clearLanguage } = useLanguageStore();
  const { xpToday, dailyGoal, streak } = useLearningStore();
  const [userName, setUserName] = useState("Learner");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.user?.user_metadata?.full_name) {
        setUserName(session.user.user_metadata.full_name.split(" ")[0]);
      } else if (session?.user?.email) {
        setUserName(session.user.email.split("@")[0]);
      }
      setIsLoading(false);
    }
    getUser();
  }, []);

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      clearLanguage();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const language = LANGUAGES.find((l) => l.code === selectedLanguage) || null;
  const unit = UNITS.find((u) => u.languageCode === selectedLanguage);
  const greeting = getGreeting(selectedLanguage);

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color={colors.primary.purple} />
      </View>
    );
  }

  const handleContinuePress = () => {
    router.push("/(tabs)/learn");
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.neutral.background }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <HomeHeader
          userDisplayName={userName}
          selectedLanguage={language}
          streak={streak}
          greeting={greeting}
          onSignOutPress={signOut}
        />

        <DailyGoalCard currentXP={xpToday} goalXP={dailyGoal} />

        <ContinueLearningCard
          languageName={language?.name ?? "Pick a language"}
          level="A1"
          unit={`Unit ${unit?.order ?? 1}`}
          onPress={handleContinuePress}
        />

        <TodayPlan />

        <NextUpCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 100,
  },
});
