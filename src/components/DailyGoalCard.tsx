import React from "react";
import { View, Text, Image } from "react-native";
import { images } from "@/constants/images";

interface DailyGoalCardProps {
  currentXP: number;
  goalXP: number;
}

export function DailyGoalCard({ currentXP, goalXP }: DailyGoalCardProps) {
  const progress = goalXP > 0 ? Math.min((currentXP / goalXP) * 100, 100) : 0;

  return (
    <View className="flex-row items-center bg-[#FFF5E8] rounded-2.5xl py-4 pl-5 pr-3 mb-4">
      <View className="flex-1 pr-2">
        <Text className="font-poppins text-xs text-text-secondary mb-1">
          Daily goal
        </Text>
        <Text>
          <Text className="font-poppins-bold text-3xl text-text-primary leading-8.5">
            {currentXP}
          </Text>
          <Text className="font-poppins text-sm text-text-secondary leading-8.5">
            {` / ${goalXP} XP`}
          </Text>
        </Text>
        <View className="h-2 bg-border rounded mt-2.5 overflow-hidden">
          <View
            className="h-2 bg-streak rounded"
            style={{ width: `${Math.round(progress)}%` as `${number}%` }}
          />
        </View>
      </View>
      <Image
        source={images.treasure}
        className="w-20 h-20"
        resizeMode="contain"
      />
    </View>
  );
}
