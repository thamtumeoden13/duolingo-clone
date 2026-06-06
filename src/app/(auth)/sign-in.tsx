import SocialButton from "@/components/SocialButton";
import VerificationModal from "@/components/VerificationModal";
import { images } from "@/constants/images";
import { supabase } from "@/lib/supabase";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { useState, useEffect } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

WebBrowser.maybeCompleteAuthSession();

export default function SignInScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showVerification, setShowVerification] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);

  useEffect(() => {
    let timer: any;
    if (resendCountdown > 0) {
      timer = setInterval(() => {
        setResendCountdown((prev: number) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendCountdown]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.replace("/");
      }
    });
  }, []);

  const handleSignIn = async () => {
    setAuthError("");
    setIsLoading(true);
    try {
      // For this teaching project, we'll use a mock OTP flow
      // We still validate that email and password are provided
      if (!email || !password) {
        setAuthError("Please enter email and password.");
        return;
      }

      // Show verification modal instead of direct sign in
      setShowVerification(true);
      setResendCountdown(60);
    } catch (err: any) {
      setAuthError("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerify = async (code: string) => {
    setAuthError("");
    try {
      if (code === "000000") {
        // Mock successful sign in
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          setAuthError(error.message || "Invalid email or password.");
          return;
        }

        router.replace("/");
      } else {
        setAuthError("Invalid verification code. Try 000000");
      }
    } catch (err) {
      console.error("Verification failed", err);
      setAuthError("Verification failed. Please try again.");
    }
  };

  const handleResend = async () => {
    if (resendCountdown > 0) return;
    setResendCountdown(60);
    // In a real app, you would trigger supabase.auth.signInWithOtp or similar here
  };



  const handleSSO = async (provider: "google" | "apple" | "facebook") => {
    setAuthError("");
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: Linking.createURL("/"),
        },
      });

      if (error) throw error;
      
      if (data.url) {
        const result = await WebBrowser.openAuthSessionAsync(data.url, Linking.createURL("/"));
        if (result.type === "success") {
          const { url } = result;
          const params = Linking.parse(url);
          if (params.queryParams?.access_token) {
            await supabase.auth.setSession({
              access_token: params.queryParams.access_token as string,
              refresh_token: params.queryParams.refresh_token as string,
            });
            router.replace("/");
          }
        }
      }
    } catch (err) {
      console.error("SSO sign-in failed", err);
      setAuthError("Couldn't continue with social sign in. Please try again.");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-1 px-6">
            {/* Back */}
            <TouchableOpacity
              onPress={() => router.back()}
              className="mt-4 w-10 h-10 justify-center"
            >
              <Ionicons name="chevron-back" size={24} color="#001328" />
            </TouchableOpacity>

            {/* Header */}
            <Text className="h1 mt-4">Welcome back!</Text>
            <Text className="body-md text-text-secondary mt-2">
              Continue your language journey ✨
            </Text>

            {/* Mascot */}
            <View className="items-center mt-6 mb-6">
              <Image
                source={images.mascotAuth}
                style={{ width: 160, height: 160 }}
                resizeMode="contain"
              />
            </View>

            {/* Email */}
            <View className="border border-border rounded-2xl px-4 pt-2.5 pb-3 mb-3">
              <Text className="font-poppins-regular text-[11px] text-text-secondary mb-0.5">Email address</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="alex@gmail.com"
                placeholderTextColor="#9ca3af"
                keyboardType="email-address"
                autoCapitalize="none"
                className="font-poppins-regular text-sm text-text-primary p-0"
              />
            </View>

            {/* Password */}
            <View className="border border-border rounded-2xl px-4 pt-2.5 pb-3 mb-3">
              <Text className="font-poppins-regular text-[11px] text-text-secondary mb-0.5">Password</Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••"
                placeholderTextColor="#9ca3af"
                secureTextEntry
                autoCapitalize="none"
                className="font-poppins-regular text-sm text-text-primary p-0"
              />
            </View>

            {authError ? (
              <Text className="text-sm text-error mb-2 font-poppins-regular">{authError}</Text>
            ) : null}

            {/* Sign In button */}
            <TouchableOpacity
              className="bg-lingua-purple rounded-2xl py-4 items-center mt-2"
              activeOpacity={0.85}
              onPress={handleSignIn}
              disabled={!email || !password || isLoading}
              style={{ opacity: !email || !password || isLoading ? 0.6 : 1 }}
              testID="sign-in-button"
            >
              <Text className="font-poppins-semibold text-base text-white">
                {isLoading ? "Signing in..." : "Sign In"}
              </Text>
            </TouchableOpacity>

            {/* Divider */}
            <View className="flex-row items-center my-6 gap-3">
              <View className="flex-1 h-px bg-border" />
              <Text className="body-sm text-text-secondary">
                or continue with
              </Text>
              <View className="flex-1 h-px bg-border" />
            </View>

            {/* Social */}
            <SocialButton
              icon={<AntDesign name="google" size={20} color="#DB4437" />}
              label="Continue with Google"
              onPress={() => handleSSO("google")}
            />
            <SocialButton
              icon={<FontAwesome name="facebook" size={20} color="#1877F2" />}
              label="Continue with Facebook"
              onPress={() => handleSSO("facebook")}
            />
            <SocialButton
              icon={<AntDesign name="apple" size={20} color="#000" />}
              label="Continue with Apple"
              onPress={() => handleSSO("apple")}
            />

            {/* Sign Up link */}
            <View className="flex-row justify-center mt-4 mb-8">
              <Text className="body-md text-text-secondary">
                {"Don't have an account? "}
              </Text>
              <TouchableOpacity
                onPress={() => router.replace("/(auth)/sign-up")}
              >
                <Text className="body-md text-lingua-purple font-poppins-semibold">
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal
        visible={showVerification}
        email={email}
        onClose={() => setShowVerification(false)}
        onVerify={handleVerify}
        onResend={handleResend}
        resendCountdown={resendCountdown}
        error={authError}
      />
    </SafeAreaView>
  );
}
