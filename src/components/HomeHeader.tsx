import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Bell } from "lucide-react-native";
import { images } from "@/constants/images";
import { Language } from "@/types/learning";

interface HomeHeaderProps {
  userDisplayName: string;
  selectedLanguage: Language | null;
  streak: number;
}

export function HomeHeader({ userDisplayName, selectedLanguage, streak }: HomeHeaderProps) {
  return (
    <View className="flex-row items-center justify-between px-6 py-4">
      <View className="flex-row items-center">
        <View className="h-10 w-10 overflow-hidden rounded-full border border-gray-100 bg-gray-50 items-center justify-center">
          {selectedLanguage?.flag ? (
            <Image
              source={{ uri: selectedLanguage.flag }}
              className="h-full w-full"
              resizeMode="cover"
            />
          ) : (
            <Text className="text-xl">🌐</Text>
          )}
        </View>
        <Text className="ml-3 text-xl font-bold text-gray-800" style={{ fontFamily: "Poppins-Bold" }}>
          Hola, {userDisplayName}! 👋
        </Text>
      </View>

      <View className="flex-row items-center">
        <View className="flex-row items-center mr-4">
          <Image source={images.streakFire} className="h-6 w-6" resizeMode="contain" />
          <Text className="ml-1 text-lg font-bold text-gray-600" style={{ fontFamily: "Poppins-Bold" }}>
            {streak}
          </Text>
        </View>
        <TouchableOpacity className="relative">
          <Bell size={24} color="#1F2937" strokeWidth={2} />
          <View className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 border border-white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
