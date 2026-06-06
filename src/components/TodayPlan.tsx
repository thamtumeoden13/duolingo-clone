import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Book, Headphones, Zap, CheckCircle2, Circle } from "lucide-react-native";

interface PlanItem {
  id: string;
  type: "lesson" | "conversation" | "vocabulary";
  title: string;
  subtitle: string;
  completed: boolean;
}

const PLAN_ITEMS: PlanItem[] = [
  {
    id: "1",
    type: "lesson",
    title: "Lesson",
    subtitle: "At the café",
    completed: true,
  },
  {
    id: "2",
    type: "conversation",
    title: "AI Conversation",
    subtitle: "Talk about your day",
    completed: false,
  },
  {
    id: "3",
    type: "vocabulary",
    title: "New words",
    subtitle: "10 words",
    completed: false,
  },
];

export function TodayPlan() {
  return (
    <View className="mx-6 mt-8">
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-xl font-bold text-gray-800" style={{ fontFamily: "Poppins-Bold" }}>
          Today&apos;s plan
        </Text>
        <TouchableOpacity>
          <Text className="text-indigo-600 font-bold" style={{ fontFamily: "Poppins-Bold" }}>
            View all
          </Text>
        </TouchableOpacity>
      </View>

      <View className="gap-y-4">
        {PLAN_ITEMS.map((item) => (
          <View key={item.id} className="flex-row items-center justify-between">
            <View className="flex-row items-center flex-1">
              <View 
                className={`h-14 w-14 rounded-2xl items-center justify-center ${
                  item.type === "lesson" ? "bg-[#6366F1]" : 
                  item.type === "conversation" ? "bg-[#818CF8]" : 
                  "bg-[#F87171]"
                }`}
              >
                {item.type === "lesson" && <Book size={28} color="white" />}
                {item.type === "conversation" && <Headphones size={28} color="white" />}
                {item.type === "vocabulary" && <Zap size={28} color="white" />}
              </View>
              <View className="ml-4">
                <Text className="text-lg font-bold text-gray-800" style={{ fontFamily: "Poppins-Bold" }}>
                  {item.title}
                </Text>
                <Text className="text-gray-500 font-medium" style={{ fontFamily: "Poppins-Medium" }}>
                  {item.subtitle}
                </Text>
              </View>
            </View>
            {item.completed ? (
              <CheckCircle2 size={28} color="#6366F1" fill="#E0E7FF" />
            ) : (
              <Circle size={28} color="#D1D5DB" strokeWidth={1.5} />
            )}
          </View>
        ))}
      </View>
    </View>
  );
}
