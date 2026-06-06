import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { images } from "@/constants/images";

interface ContinueLearningCardProps {
  languageName: string;
  level: string;
  unit: string;
  onPress: () => void;
}

export function ContinueLearningCard({ languageName, level, unit, onPress }: ContinueLearningCardProps) {
  return (
    <View className="mx-6 mt-6 rounded-[32px] overflow-hidden bg-[#6366F1]">
      <View className="p-6 flex-row items-center justify-between">
        <View className="flex-1 z-10">
          <Text className="text-white/80 font-medium mb-1" style={{ fontFamily: "Poppins-Medium" }}>
            Continue learning
          </Text>
          <Text className="text-white text-3xl font-bold mb-1" style={{ fontFamily: "Poppins-Bold" }}>
            {languageName}
          </Text>
          <Text className="text-white/90 text-lg mb-6" style={{ fontFamily: "Poppins-Medium" }}>
            {level} • {unit}
          </Text>
          
          <TouchableOpacity 
            onPress={onPress}
            className="bg-white rounded-2xl py-3 px-8 self-start"
          >
            <Text className="text-indigo-600 font-bold text-lg" style={{ fontFamily: "Poppins-Bold" }}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>

        <View className="absolute right-[-20] bottom-[-20]">
          <Image 
            source={images.palace} 
            className="h-44 w-44" 
            resizeMode="contain"
            style={{ opacity: 0.9 }}
          />
        </View>
      </View>
    </View>
  );
}
