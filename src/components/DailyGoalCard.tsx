import React from "react";
import { View, Text, Image } from "react-native";
import { images } from "@/constants/images";

interface DailyGoalCardProps {
  currentXP: number;
  goalXP: number;
}

export function DailyGoalCard({ currentXP, goalXP }: DailyGoalCardProps) {
  const progress = Math.min(currentXP / goalXP, 1);

  return (
    <View className="mx-6 mt-4 p-5 rounded-[32px] bg-[#FFF9F2] flex-row items-center justify-between border border-[#FFE8D1]/30">
      <View className="flex-1 mr-4">
        <Text className="text-gray-500 font-medium mb-1" style={{ fontFamily: "Poppins-Medium" }}>
          Daily goal
        </Text>
        <View className="flex-row items-baseline mb-3">
          <Text className="text-3xl font-bold text-gray-800" style={{ fontFamily: "Poppins-Bold" }}>
            {currentXP}
          </Text>
          <Text className="text-gray-400 font-medium text-lg ml-1" style={{ fontFamily: "Poppins-Medium" }}>
            / {goalXP} XP
          </Text>
        </View>
        
        {/* Progress Bar */}
        <View className="h-2 w-full bg-gray-200/50 rounded-full overflow-hidden">
          <View 
            className="h-full bg-[#FF9500] rounded-full" 
            style={{ width: `${progress * 100}%` }} 
          />
        </View>
      </View>

      <Image 
        source={images.treasure} 
        className="h-20 w-20" 
        resizeMode="contain" 
      />
    </View>
  );
}
