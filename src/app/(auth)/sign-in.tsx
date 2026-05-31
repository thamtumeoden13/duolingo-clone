import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Modal, KeyboardAvoidingView, Platform, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState, useRef } from "react";

export default function SignInScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("alex@gmail.com");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(TextInput | null)[]>(new Array(6).fill(null));

  const handleSignIn = () => {
    setIsModalVisible(true);
  };

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...verificationCode];
    newCode[index] = text;
    setVerificationCode(newCode);

    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newCode.every((digit) => digit !== "") && index === 5) {
       setTimeout(() => {
         setIsModalVisible(false);
         router.replace("/");
       }, 500);
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View className="px-6 pt-4 pb-10">
          {/* Back Button */}
          <TouchableOpacity onPress={() => router.back()} className="mb-6 w-10 h-10 items-start justify-center">
            <Ionicons name="chevron-back" size={28} color="#0D132B" />
          </TouchableOpacity>

          {/* Title & Subtitle */}
          <View className="mb-4">
            <Text className="text-[32px] font-bold text-text-primary mb-2">Welcome back</Text>
            <Text className="text-body-lg text-text-secondary">We're so excited to see you again! 👋</Text>
          </View>

          {/* Mascot */}
          <View className="items-center mb-8">
            <Image
              source={images.mascotAuth}
              className="w-[200px] h-[150px]"
              resizeMode="contain"
            />
          </View>

          {/* Form */}
          <View className="gap-y-4 mb-6">
            <View className="bg-white border border-border rounded-2xl p-4">
              <Text className="text-caption text-text-secondary mb-1">Email</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                className="text-body-lg text-text-primary font-medium p-0"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* Sign In Button */}
          <TouchableOpacity
            onPress={handleSignIn}
            className="bg-purple w-full h-[64px] rounded-2xl items-center justify-center mb-8"
            activeOpacity={0.8}
          >
            <Text className="text-white text-lg font-bold">Sign In</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View className="flex-row items-center mb-8">
            <View className="flex-1 h-[1px] bg-border" />
            <Text className="px-4 text-text-secondary text-body-md font-medium">or continue with</Text>
            <View className="flex-1 h-[1px] bg-border" />
          </View>

          {/* Social Buttons */}
          <View className="gap-y-4 mb-10">
            <SocialButton icon="logo-google" text="Continue with Google" color="#EB4335" />
            <SocialButton icon="logo-facebook" text="Continue with Facebook" color="#1877F2" />
            <SocialButton icon="logo-apple" text="Continue with Apple" color="#000000" />
          </View>

          {/* Footer Link */}
          <View className="flex-row justify-center items-center">
            <Text className="text-text-secondary text-body-lg">Don't have an account? </Text>
            <TouchableOpacity onPress={() => router.push("/sign-up")}>
              <Text className="text-purple text-body-lg font-bold">Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Verification Modal */}
      <Modal
        visible={isModalVisible}
        transparent
        animationType="fade"
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1"
        >
          <Pressable 
            className="flex-1 bg-black/50 justify-center px-6"
            onPress={() => setIsModalVisible(false)}
          >
            <Pressable className="bg-white rounded-3xl p-8 items-center" onPress={(e) => e.stopPropagation()}>
              <Text className="text-h2 text-text-primary mb-2 text-center">Verify your identity</Text>
              <Text className="text-body-md text-text-secondary mb-8 text-center">
                We've sent a 6-digit code to your email. Please enter it below to sign in.
              </Text>

              <View className="flex-row justify-between w-full mb-8">
                {verificationCode.map((digit, index) => (
                  <TextInput
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    style={{ 
                      width: 40, 
                      height: 56, 
                      borderBottomWidth: 2, 
                      borderBottomColor: "#E5E7EB",
                      textAlign: "center",
                      fontSize: 24,
                      fontWeight: "bold",
                      color: "#0D132B"
                    }}
                    maxLength={1}
                    keyboardType="number-pad"
                    value={digit}
                    onChangeText={(text) => handleCodeChange(text, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                  />
                ))}
              </View>

              <TouchableOpacity
                onPress={() => setIsModalVisible(false)}
                className="w-full h-14 bg-surface rounded-2xl items-center justify-center"
              >
                <Text className="text-text-primary font-bold">Cancel</Text>
              </TouchableOpacity>
            </Pressable>
          </Pressable>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
}

function SocialButton({ icon, text, color }: { icon: any; text: string; color: string }) {
  return (
    <TouchableOpacity className="flex-row items-center justify-center h-[64px] border border-border rounded-2xl px-4">
      <Ionicons name={icon} size={24} color={color} style={{ marginRight: 12 }} />
      <Text className="text-text-primary font-bold text-lg ml-3">{text}</Text>
    </TouchableOpacity>
  );
}
