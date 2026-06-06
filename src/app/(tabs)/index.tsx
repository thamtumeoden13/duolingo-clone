import React, { useEffect, useState } from "react";
import { ScrollView, SafeAreaView, View, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { supabase } from "@/lib/supabase";
import { useLanguageStore } from "@/store/languageStore";
import { LANGUAGES } from "@/data/languages";
import { HomeHeader } from "@/components/HomeHeader";
import { DailyGoalCard } from "@/components/DailyGoalCard";
import { ContinueLearningCard } from "@/components/ContinueLearningCard";
import { TodayPlan } from "@/components/TodayPlan";
import { NextUpCard } from "@/components/NextUpCard";

export default function Home() {
  const router = useRouter();
  const { selectedLanguage } = useLanguageStore();
  const [userName, setUserName] = useState("Alex");
  const [isLoading, setIsLoading] = useState(true);

  const languageData = LANGUAGES.find((l) => l.code === selectedLanguage) || null;

  useEffect(() => {
    async function getUser() {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user?.user_metadata?.full_name) {
        setUserName(session.user.user_metadata.full_name.split(" ")[0]);
      } else if (session?.user?.email) {
        setUserName(session.user.email.split("@")[0]);
      }
      setIsLoading(false);
    }
    getUser();
  }, []);

  const handleContinuePress = () => {
    router.push("/(tabs)/learn");
  };

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#6366F1" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView 
        className="flex-1" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <HomeHeader 
          userDisplayName={userName} 
          selectedLanguage={languageData} 
          streak={12} 
        />
        
        <DailyGoalCard 
          currentXP={15} 
          goalXP={20} 
        />
        
        <ContinueLearningCard 
          languageName={languageData?.name || "Spanish"} 
          level="A1" 
          unit="Unit 3" 
          onPress={handleContinuePress} 
        />
        
        <TodayPlan />
        
        <NextUpCard />
      </ScrollView>
    </SafeAreaView>
  );
}
