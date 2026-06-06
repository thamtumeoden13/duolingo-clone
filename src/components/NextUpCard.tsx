import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Video } from "lucide-react-native";

export function NextUpCard() {
  return (
    <View className="mx-6 mt-8 mb-10 p-5 rounded-[32px] bg-[#F5F8F1] flex-row items-center justify-between border border-[#D5E1C7]/30">
      <View className="flex-1 mr-4">
        <Text className="text-gray-500 font-medium mb-1" style={{ fontFamily: "Poppins-Medium" }}>
          Next up
        </Text>
        <Text className="text-2xl font-bold text-gray-800 mb-1" style={{ fontFamily: "Poppins-Bold" }}>
          AI Video Call
        </Text>
        <Text className="text-gray-500 font-medium text-lg" style={{ fontFamily: "Poppins-Medium" }}>
          Practice speaking
        </Text>
      </View>

      <View className="flex-row items-center">
        <View className="relative">
          <Image 
            source={{ uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" }} 
            className="h-20 w-20 rounded-full border-4 border-white" 
            resizeMode="cover" 
          />
          <TouchableOpacity 
            className="absolute bottom-0 right-[-10] h-10 w-10 bg-[#84CC16] rounded-full items-center justify-center border-4 border-white shadow-sm"
          >
            <Video size={18} color="white" fill="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
