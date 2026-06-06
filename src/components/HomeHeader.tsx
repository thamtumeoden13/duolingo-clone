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
      <View className="flex-row items-center gap-2.5">
        {selectedLanguage ? (
          <Image
            source={{ uri: selectedLanguage.flag }}
            className="w-8.5 h-8.5 rounded-full"
          />
        ) : (
          <View className="w-8.5 h-8.5 rounded-full bg-surface" />
        )}
        <Text className="font-poppins-semibold text-base text-text-primary">
          {greeting}, {userDisplayName}! 👋
        </Text>
      </View>

      <View className="flex-row items-center gap-3.5">
        <View className="flex-row items-center gap-1">
          <Image source={images.streakFire} className="w-5.5 h-5.5" />
          <Text className="font-poppins-semibold text-3.75 text-streak">
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
