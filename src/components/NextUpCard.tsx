import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function NextUpCard() {
  return (
    <View className="flex-row items-center bg-[#F5F8F1] rounded-2.5xl p-5 mb-10 border border-[#D5E1C7]/30">
      <View className="flex-1 mr-4">
        <Text className="font-poppins text-xs text-text-secondary mb-1">
          Next up
        </Text>
        <Text className="font-poppins-bold text-2xl text-text-primary leading-7 mb-1">
          AI Video Call
        </Text>
        <Text className="font-poppins text-sm text-text-secondary">
          Practice speaking
        </Text>
      </View>

      <View className="flex-row items-center">
        <View className="relative">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
            }}
            className="h-20 w-20 rounded-full border-4 border-white"
            resizeMode="cover"
          />
          <TouchableOpacity
            className="absolute bottom-0 right--2 h-9 w-9 bg-[#84CC16] rounded-full items-center justify-center border-2 border-white shadow-sm"
            activeOpacity={0.85}
          >
            <Ionicons name="videocam" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
