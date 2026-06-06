import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/theme";

interface PlanItem {
  id: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle: string;
  completed: boolean;
}

const PLAN_ITEMS: PlanItem[] = [
  {
    id: "lesson",
    icon: "book",
    iconBg: "#EDE9FE",
    iconColor: colors.primary.purple,
    title: "Lesson",
    subtitle: "At the café",
    completed: true,
  },
  {
    id: "ai-conversation",
    icon: "headset",
    iconBg: "#EDE9FE",
    iconColor: colors.primary.purple,
    title: "AI Conversation",
    subtitle: "Talk about your day",
    completed: false,
  },
  {
    id: "new-words",
    icon: "chatbubble-ellipses",
    iconBg: "#FEE2E2",
    iconColor: "#EF4444",
    title: "New words",
    subtitle: "10 words",
    completed: false,
  },
];

export function TodayPlan() {
  return (
    <View>
      <View className="flex-row items-center justify-between mb-3">
        <Text className="font-poppins-semibold text-[17px] text-text-primary">
          {"Today's plan"}
        </Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text className="font-poppins-medium text-[13px] text-lingua-blue">
            View all
          </Text>
        </TouchableOpacity>
      </View>

      <View
        className="bg-white rounded-[20px] border border-border mb-4 overflow-hidden"
        style={styles.planCardShadow}
      >
        {PLAN_ITEMS.map((item, index) => (
          <View key={item.id}>
            {index > 0 && <View className="h-px bg-border mx-4" />}
            <View className="flex-row items-center px-4 py-[14px]">
              <View
                className="w-11 h-11 rounded-xl items-center justify-center"
                style={{ backgroundColor: item.iconBg }}
              >
                <Ionicons name={item.icon} size={20} color={item.iconColor} />
              </View>
              <View className="flex-1 ml-3">
                <Text className="font-poppins-semibold text-sm text-text-primary mb-0.5">
                  {item.title}
                </Text>
                <Text className="font-poppins text-xs text-text-secondary">
                  {item.subtitle}
                </Text>
              </View>
              {item.completed ? (
                <View className="w-[26px] h-[26px] rounded-full bg-lingua-blue items-center justify-center">
                  <Ionicons name="checkmark" size={14} color="#fff" />
                </View>
              ) : (
                <View className="w-[26px] h-[26px] rounded-full border-2 border-border" />
              )}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  planCardShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
});
