import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import { useLanguageStore } from "@/store/languageStore";
import { UNITS } from "@/data/units";
import { LESSONS } from "@/data/lessons";
import { images } from "@/constants/images";
import { LessonCard } from "@/components/LessonCard";

const { width } = Dimensions.get("window");

export default function Learn() {
  const { selectedLanguage } = useLanguageStore();
  const [activeTab, setActiveTab] = useState<"lessons" | "practice">("lessons");

  const currentUnits = UNITS.filter(
    (u) => u.languageCode === selectedLanguage?.code
  ).sort((a, b) => a.order - b.order);

  // For now, we just show the first unit
  const currentUnit = currentUnits[0];
  const unitLessons = currentUnit
    ? LESSONS.filter((l) => currentUnit.lessonIds.includes(l.id))
    : [];

  const handleLessonPress = (lessonId: string) => {
    // Navigate to lesson screen (to be implemented)
    console.log("Opening lesson:", lessonId);
    router.push({
        pathname: "/lesson",
        params: { lessonId }
    } as any);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* Unit Header */}
        <View className="px-6 py-4 flex-row items-center justify-between">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={28} color="#1F2937" />
          </TouchableOpacity>
          <View className="items-center">
            <Text className="text-xl font-bold text-gray-800">
              {currentUnit?.title || "At the Café"}
            </Text>
            <Text className="text-sm font-medium text-gray-500">
              Unit {currentUnit?.order || 1} • 3 / {unitLessons.length} lessons
            </Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="bookmark-outline" size={24} color="#6366F1" />
          </TouchableOpacity>
        </View>

        {/* Mascot Area */}
        <View className="relative h-64 w-full items-center justify-center px-6">
           <Image
             source={images.earth} // Using earth as background
             style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1 }}
             resizeMode="cover"
           />
           <Image
             source={images.mascotHappy}
             className="h-48 w-48"
             resizeMode="contain"
           />
           {/* Cafe Building indicator could be added here if we had the asset */}
           <View className="absolute bottom-4 right-10 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
                <Text className="text-2xl">☕</Text>
           </View>
        </View>

        {/* Tabs */}
        <View className="mx-6 mb-6 flex-row rounded-2xl bg-gray-100 p-1">
          <TouchableOpacity
            onPress={() => setActiveTab("lessons")}
            className={`flex-1 items-center rounded-xl py-3 ${
              activeTab === "lessons" ? "bg-white shadow-sm" : ""
            }`}
          >
            <Text
              className={`font-bold ${
                activeTab === "lessons" ? "text-indigo-500" : "text-gray-500"
              }`}
            >
              Lessons
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab("practice")}
            className={`flex-1 items-center rounded-xl py-3 ${
              activeTab === "practice" ? "bg-white shadow-sm" : ""
            }`}
          >
            <Text
              className={`font-bold ${
                activeTab === "practice" ? "text-indigo-500" : "text-gray-500"
              }`}
            >
              Practice
            </Text>
          </TouchableOpacity>
        </View>

        {/* Lesson List */}
        <View className="px-6 pb-20">
          {unitLessons.map((lesson, index) => {
            // Mock status logic
            let status: "completed" | "in-progress" | "locked" = "locked";
            if (index < 2) status = "completed";
            else if (index === 2) status = "in-progress";

            return (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                index={index}
                status={status}
                onPress={() => handleLessonPress(lesson.id)}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
