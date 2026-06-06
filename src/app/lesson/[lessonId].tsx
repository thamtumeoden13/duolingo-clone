import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { LESSONS } from "@/data/lessons";
import { images } from "@/constants/images";

export default function AudioLessonScreen() {
  const router = useRouter();
  const { lessonId } = useLocalSearchParams<{ lessonId: string }>();

  const lesson = LESSONS.find((l) => l.id === lessonId);

  if (!lesson) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Lesson not found</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-lingua-purple mt-4">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }c

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <SafeAreaView edges={["top"]} style={{ backgroundColor: "#fff" }}>
        {/* Header */}
        <View className="px-4 py-2 flex-row items-center justify-between">
          <View className="flex-row items-center">
            <TouchableOpacity onPress={() => router.back()} className="mr-3">
              <Ionicons name="chevron-back" size={28} color="#001328" />
            </TouchableOpacity>
            <View>
              <Text className="text-lg font-poppins-bold text-text-primary">
                AI Teacher
              </Text>
              <View className="flex-row items-center">
                <View className="w-2.5 h-2.5 rounded-full bg-green-500 mr-1.5" />
                <Text className="text-xs font-poppins text-text-secondary">
                  Online
                </Text>
              </View>
            </View>
          </View>
          <View className="flex-row items-center space-x-3 gap-3">
            <View className="flex-row items-center bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
              <Ionicons name="videocam-outline" size={20} color="#001328" />
              <Text className="text-sm font-poppins-semibold ml-1.5 text-text-primary">12</Text>
            </View>
            <TouchableOpacity className="w-10 h-10 rounded-full bg-white border border-gray-100 items-center justify-center">
              <Ionicons name="notifications-outline" size={22} color="#001328" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      <View className="flex-1 px-4 mt-2">
        {/* Main Content Area */}
        <View className="flex-1 relative rounded-[40px] overflow-hidden bg-lingua-purple/10">
           {/* Placeholder Background removed to keep it clean purple as requested */}

           {/* Central Mascot (Fox substitute) */}
           <View className="flex-1 items-center justify-center">
              <Image 
                source={images.mascotWelcome}
                className="w-72 h-72"
                resizeMode="contain"
              />
           </View>

           {/* Teacher Response Bubble */}
           <View className="absolute bottom-10 left-6 right-6">
              <View className="bg-white p-6 rounded-3xl shadow-sm relative">
                <Text className="text-lg font-poppins-semibold text-text-primary mb-1">
                  {lesson.aiTeacherPrompt.introMessage.split('. ')[0]}!
                </Text>
                <Text className="text-base font-poppins text-text-secondary">
                  {lesson.aiTeacherPrompt.introMessage.split('. ').slice(1).join('. ') || "Ready to learn?"}
                </Text>
                <TouchableOpacity className="absolute right-6 top-1/2 -translate-y-2">
                  <Ionicons name="volume-medium" size={28} color="#6c4ef5" />
                </TouchableOpacity>

                {/* Bubble tail */}
                <View 
                  style={{
                    position: 'absolute',
                    bottom: -10,
                    right: 40,
                    width: 0,
                    height: 0,
                    backgroundColor: 'transparent',
                    borderStyle: 'solid',
                    borderLeftWidth: 10,
                    borderRightWidth: 10,
                    borderTopWidth: 10,
                    borderLeftColor: 'transparent',
                    borderRightColor: 'transparent',
                    borderTopColor: 'white',
                  }}
                />
              </View>
           </View>
        </View>

        {/* Call Controls */}
        <View className="flex-row justify-between items-center py-6 px-2">
          <View className="items-center">
            <TouchableOpacity 
              key="btn-camera"
              className="w-16 h-16 rounded-full bg-white border border-gray-100 items-center justify-center shadow-sm"
            >
              <Ionicons name="videocam-off" size={28} color="#001328" />
            </TouchableOpacity>
            <Text className="text-[10px] font-poppins text-text-secondary mt-1">Camera</Text>
          </View>

          <View className="items-center">
            <TouchableOpacity 
              key="btn-mic"
              className="w-16 h-16 rounded-full bg-white border border-gray-100 items-center justify-center shadow-sm"
            >
              <Ionicons name="mic" size={28} color="#001328" />
            </TouchableOpacity>
            <Text className="text-[10px] font-poppins text-text-secondary mt-1">Mic</Text>
          </View>

          <View className="items-center">
            <TouchableOpacity 
              key="btn-subtitles"
              className="w-16 h-16 rounded-full bg-white border border-gray-100 items-center justify-center shadow-sm"
            >
              <MaterialCommunityIcons name="translate-variant" size={28} color="#001328" />
            </TouchableOpacity>
            <Text className="text-[10px] font-poppins text-text-secondary mt-1">Subtitles</Text>
          </View>

          <View className="items-center">
            <TouchableOpacity 
              key="btn-endcall"
              onPress={() => router.back()}
              className="w-16 h-16 rounded-full bg-[#ff4b4b] items-center justify-center shadow-lg"
            >
              <Ionicons name="call" size={28} color="white" style={{ transform: [{ rotate: '135deg' }] }} />
            </TouchableOpacity>
            <Text className="text-[10px] font-poppins text-text-secondary mt-1">End Call</Text>
          </View>
        </View>

        {/* Feedback Section */}
        <View className="bg-white rounded-3xl p-6 border border-gray-100 mb-8 flex-row justify-between">
           <View className="flex-1 items-center border-r border-gray-100">
             <Text className="text-xs font-poppins-semibold text-text-primary mb-2">Speaking</Text>
             <Text className="text-sm font-poppins-bold text-[#4CAF50]">Excellent</Text>
           </View>
           <View className="flex-1 items-center border-r border-gray-100">
             <Text className="text-xs font-poppins-semibold text-text-primary mb-2">Pronunciation</Text>
             <Text className="text-sm font-poppins-bold text-[#2196F3]">Great</Text>
           </View>
           <View className="flex-1 items-center">
             <Text className="text-xs font-poppins-semibold text-text-primary mb-2">Grammar</Text>
             <Text className="text-sm font-poppins-bold text-[#673AB7]">Good</Text>
           </View>
        </View>
      </View>
    </View>
  );
}
