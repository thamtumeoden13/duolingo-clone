import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import { useLanguageStore } from "@/store/languageStore";
import { UNITS } from "@/data/units";
import { LESSONS } from "@/data/lessons";
import { images } from "@/constants/images";
import { LessonCard } from "@/components/LessonCard";

export default function Learn() {
  const { selectedLanguage } = useLanguageStore();
  const [activeTab, setActiveTab] = useState<"lessons" | "practice">("lessons");

  const currentUnits = UNITS.filter(
    (u) => u.languageCode === (selectedLanguage || "en")
  ).sort((a, b) => a.order - b.order);

  // For the UI, we'll pick the first unit of the selected language or a default one
  const currentUnit = currentUnits[0] || UNITS.find(u => u.languageCode === 'en');
  
  const unitLessons = LESSONS.filter(l => currentUnit?.lessonIds.includes(l.id));

  const handleLessonPress = (lessonId: string) => {
    // Navigate to the lesson details (practice/start)
    router.push({
      pathname: "/lesson",
      params: { lessonId }
    } as any);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <View className="px-4 py-4 flex-row items-center justify-between">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={28} color="#001328" />
        </TouchableOpacity>
        <View className="items-center flex-1">
          <Text className="text-xl font-poppins-bold text-text-primary">
            {currentUnit?.title || "Lessons"}
          </Text>
          <Text className="text-sm font-poppins text-text-secondary">
            Unit {currentUnit?.order || 1} • 3 / {unitLessons.length} lessons
          </Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="bookmark-outline" size={24} color="#6c4ef5" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        className="flex-1 px-4"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Hero Section */}
        <View className="relative w-full h-56 mt-2 mb-6 rounded-3xl overflow-hidden bg-blue-50">
            <Image 
                source={images.cafeHero}
                className="w-full h-full"
                resizeMode="contain"
            />
            {/* Overlay for "Café" vibe if needed, but mascotWelcome is fine for now */}
            <View className="absolute bottom-4 left-4 bg-white/20 px-3 py-1 rounded-full">
                <Text className="text-white text-xs font-bold">In progress</Text>
            </View>
        </View>

        {/* Tab Switcher */}
        <View className="flex-row bg-gray-100 rounded-2.5xl p-1 mb-8">
            <TouchableOpacity 
                onPress={() => setActiveTab("lessons")}
                className={`flex-1 py-3 rounded-2xl items-center ${activeTab === "lessons" ? "bg-white shadow-sm" : ""}`}
            >
                <Text className={`font-poppins-semibold ${activeTab === "lessons" ? "text-lingua-purple" : "text-gray-400"}`}>
                    Lessons
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => setActiveTab("practice")}
                className={`flex-1 py-3 rounded-2xl items-center ${activeTab === "practice" ? "bg-white shadow-sm" : ""}`}
            >
                <Text className={`font-poppins-semibold ${activeTab === "practice" ? "text-lingua-purple" : "text-gray-400"}`}>
                    Practice
                </Text>
            </TouchableOpacity>
        </View>

        {/* Lessons List */}
        {activeTab === "lessons" ? (
            <View>
                {unitLessons.map((lesson, idx) => {
                    // Mock status to match the image: 1st & 2nd completed, 3rd in progress, rest locked
                    let status: "completed" | "in-progress" | "locked" = "locked";
                    if (idx < 2) status = "completed";
                    else if (idx === 2) status = "in-progress";

                    return (
                        <LessonCard 
                            key={lesson.id}
                            lesson={lesson}
                            index={idx}
                            status={status}
                            onPress={() => handleLessonPress(lesson.id)}
                        />
                    );
                })}
            </View>
        ) : (
            <View className="items-center py-10">
                <Text className="text-gray-400">Practice content coming soon!</Text>
            </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
