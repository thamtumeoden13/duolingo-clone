import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 px-8 pt-4">
        {/* Header Logo */}
        <View className="flex-row items-center justify-center mb-12">
          <Image
            source={images.mascotLogo}
            className="w-10 h-10"
            resizeMode="contain"
          />
          <Text className="text-h2 text-text-primary ml-2 font-bold">muolingo</Text>
        </View>

        {/* Hero Text */}
        <View className="mb-10">
          <Text className="text-[40px] leading-[48px] font-bold text-text-primary">
            Your AI language
          </Text>
          <Text className="text-[40px] leading-[48px] font-bold text-purple">
            teacher.
          </Text>
        </View>

        {/* Description */}
        <View className="mb-12">
          <Text className="text-body-lg text-text-secondary leading-7">
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>
        </View>

        {/* Mascot and Chat Bubbles */}
        <View className="flex-1 items-center justify-center relative">
          {/* Hello! Bubble */}
          <View className="absolute top-0 left-4 bg-[#F0F7FF] px-4 py-2 rounded-2xl rounded-bl-none shadow-sm">
            <Text className="text-lg font-medium text-text-primary">Hello!</Text>
          </View>

          {/* ¡Hola! Bubble */}
          <View className="absolute top-[-20px] right-10 bg-[#F5F3FF] px-4 py-2 rounded-2xl rounded-br-none shadow-sm">
            <Text className="text-lg font-medium text-purple">¡Hola!</Text>
          </View>

          {/* 你好! Bubble */}
          <View className="absolute top-[40px] right-2 bg-[#FFF1F0] px-4 py-2 rounded-2xl rounded-br-none shadow-sm">
            <Text className="text-lg font-medium text-[#FF4D4F]">你好!</Text>
          </View>

          <Image
            source={images.mascotWelcome}
            className="w-[280px] h-[280px]"
            resizeMode="contain"
          />
        </View>

        {/* Footer Button */}
        <View className="pb-10">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.push("/sign-up")}
            className="bg-purple w-full h-[64px] rounded-2xl flex-row items-center justify-center relative"
          >
            <Text className="text-white text-lg font-bold">Get Started</Text>
            <View className="absolute right-6">
              <Ionicons name="chevron-forward" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
