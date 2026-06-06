import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { images } from "@/constants/images";

interface ContinueLearningCardProps {
  languageName: string;
  level: string;
  unit: string;
  onPress: () => void;
}

export function ContinueLearningCard({
  languageName,
  level,
  unit,
  onPress,
}: ContinueLearningCardProps) {
  return (
    <View className="flex-row bg-lingua-purple rounded-2.5xl h-40 mb-6 overflow-hidden">
      <View className="flex-1 py-5 pl-5 pr-2 justify-between">
        <View>
          <Text className="caption text-white/75 mb-0.5">
            Continue learning
          </Text>
          <Text className="font-poppins-bold text-2xl text-white leading-7">
            {languageName}
          </Text>
          <Text className="font-poppins text-xs text-white/65 mt-0.5">
            {level} · {unit}
          </Text>
        </View>
        <TouchableOpacity
          className="bg-white rounded-xl py-2 px-5.5 self-start"
          activeOpacity={0.85}
          onPress={onPress}
        >
          <Text className="font-poppins-semibold text-3.25 text-lingua-purple">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        source={images.palace}
        className="w-32.5 h-40"
        resizeMode="cover"
      />
    </View>
  );
}
