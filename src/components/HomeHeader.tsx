import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { images } from "@/constants/images";
import { Language } from "@/types/learning";
import { colors } from "@/constants/theme";

interface HomeHeaderProps {
  userDisplayName: string;
  selectedLanguage: Language | null;
  streak: number;
  greeting: string;
  onNotificationsPress?: () => void;
  onSignOutPress?: () => void;
}

export function HomeHeader({
  userDisplayName,
  selectedLanguage,
  streak,
  greeting,
  onNotificationsPress,
  onSignOutPress,
}: HomeHeaderProps) {
  return (
    <View className="flex-row items-center justify-between mb-5">
      <View className="flex-row items-center gap-[10px]">
        {selectedLanguage ? (
          <Image
            source={{ uri: selectedLanguage.flag }}
            className="w-[34px] h-[34px] rounded-full"
          />
        ) : (
          <View className="w-[34px] h-[34px] rounded-full bg-surface" />
        )}
        <Text className="font-poppins-semibold text-base text-text-primary">
          {greeting}, {userDisplayName}! 👋
        </Text>
      </View>

      <View className="flex-row items-center gap-[14px]">
        <View className="flex-row items-center gap-1">
          <Image source={images.streakFire} className="w-[22px] h-[22px]" />
          <Text className="font-poppins-semibold text-[15px] text-streak">
            {streak}
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} onPress={onNotificationsPress}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color={colors.neutral.textPrimary}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={onSignOutPress}>
          <Ionicons
            name="log-out-outline"
            size={24}
            color={colors.neutral.textPrimary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
