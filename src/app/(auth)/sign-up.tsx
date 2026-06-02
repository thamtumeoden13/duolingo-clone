import SocialButton from "@/components/SocialButton";
import VerificationModal from "@/components/VerificationModal";
import { images } from "@/constants/images";
import { supabase } from "@/lib/supabase";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { router } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { useState, useEffect } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

WebBrowser.maybeCompleteAuthSession();

export default function SignUpScreen() {
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

  const handleSignUp = async () => {
    setAuthError("");
    setIsLoading(true);
    try {
      if (!email || !password) {
        setAuthError("Please enter email and password.");
        return;
      }
      
      // Show verification modal instead of direct sign up
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
        // Mock successful sign up
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: Linking.createURL("/"),
          },
        });

        if (error) {
          setAuthError(error.message || "We couldn't create your account. Please try again.");
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
      console.error("SSO sign-up failed", err);
      setAuthError("Couldn't continue with social sign up. Please try again.");
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
            <Text className="h1 mt-4">Create your account</Text>
            <Text className="body-md text-text-secondary mt-2">
              Start your language journey today ✨
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
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="alex@gmail.com"
                placeholderTextColor="#9ca3af"
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
              />
            </View>

            {/* Password */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••"
                placeholderTextColor="#9ca3af"
                secureTextEntry
                autoCapitalize="none"
                style={styles.input}
              />
            </View>

            {authError ? (
              <Text className="body-sm text-error mb-2">{authError}</Text>
            ) : null}

            {/* Sign Up button */}
            <TouchableOpacity
              className="bg-lingua-purple rounded-2xl py-4 items-center mt-2"
              activeOpacity={0.85}
              onPress={handleSignUp}
              disabled={!email || !password || isLoading}
              style={{ opacity: !email || !password || isLoading ? 0.6 : 1 }}
              testID="sign-up-button"
            >
              <Text className="font-poppins-semibold text-base text-white">
                {isLoading ? "Creating account..." : "Sign Up"}
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

            <View className="flex-row justify-center mt-4 mb-8">
              <Text className="body-md text-text-secondary">
                Already have an account?{" "}
              </Text>
              <TouchableOpacity
                onPress={() => router.replace("/(auth)/sign-in")}
              >
                <Text className="body-md text-lingua-purple font-poppins-semibold">
                  Log in
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

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 12,
    marginBottom: 12,
  },
  inputLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    color: "#6b7280",
    marginBottom: 2,
  },
  input: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#001328",
    padding: 0,
  },
});
