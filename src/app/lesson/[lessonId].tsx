import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { LESSONS } from "@/data/lessons";
import { images } from "@/constants/images";
import { supabase } from "@/lib/supabase";
import { useLanguageStore } from "@/store/languageStore";
import {
  StreamVideoClient,
  StreamVideo,
  Call,
  useCall,
  useCallStateHooks,
  StreamCall,
  CallingState,
} from "@stream-io/video-react-native-sdk";

function AudioLessonContent({ lesson, onEndCall }: { lesson: any; onEndCall: () => void }) {
  const call = useCall();
  const { useMicrophoneState, useCallSession, useCallCallingState } = useCallStateHooks();
  const { isMute, microphone } = useMicrophoneState();
  const session = useCallSession();
  const callingState = useCallCallingState();

  const toggleMic = useCallback(async () => {
    if (microphone) {
      await microphone.toggle();
    }
  }, [microphone]);

  const isConnecting = callingState === CallingState.JOINING || callingState === CallingState.RINGING;
  const isJoined = callingState === CallingState.JOINED;

  return (
    <View className="flex-1 px-4 mt-2">
      {/* Main Content Area */}
      <View className="flex-1 relative rounded-[40px] overflow-hidden bg-lingua-purple/10">
         {/* Central Mascot */}
         <View className="flex-1 items-center justify-center">
            <Image 
              source={images.mascotWelcome}
              className="w-72 h-72"
              resizeMode="contain"
            />
            {isConnecting && (
              <View className="absolute inset-0 items-center justify-center bg-black/10 rounded-[40px]">
                <ActivityIndicator size="large" color="#6c4ef5" />
                <Text className="mt-4 font-poppins-semibold text-text-primary">Connecting to AI Teacher...</Text>
              </View>
            )}
         </View>

         {/* Teacher Response Bubble */}
         <View className="absolute bottom-10 left-6 right-6">
            <View className="bg-white p-6 rounded-3xl shadow-sm relative">
              <Text className="text-lg font-poppins-semibold text-text-primary mb-1">
                {lesson.aiTeacherPrompt.introMessage.split('. ')[0]}!
              </Text>
              <Text className="text-base font-poppins text-text-secondary">
                {isJoined 
                  ? (lesson.aiTeacherPrompt.introMessage.split('. ').slice(1).join('. ') || "Ready to learn?")
                  : "Connecting..."
                }
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
            disabled={true}
            className="w-16 h-16 rounded-full bg-gray-100 border border-gray-100 items-center justify-center shadow-sm opacity-50"
          >
            <Ionicons name="videocam-off" size={28} color="#001328" />
          </TouchableOpacity>
          <Text className="text-[10px] font-poppins text-text-secondary mt-1">Camera</Text>
        </View>

        <View className="items-center">
          <TouchableOpacity 
            key="btn-mic"
            onPress={toggleMic}
            className={`w-16 h-16 rounded-full border border-gray-100 items-center justify-center shadow-sm ${isMute ? 'bg-red-50' : 'bg-white'}`}
          >
            <Ionicons name={isMute ? "mic-off" : "mic"} size={28} color={isMute ? "#ff4b4b" : "#001328"} />
          </TouchableOpacity>
          <Text className="text-[10px] font-poppins text-text-secondary mt-1">
            {isMute ? "Unmute" : "Mute"}
          </Text>
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
            onPress={onEndCall}
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
  );
}

export default function AudioLessonScreen() {
  const router = useRouter();
  const { lessonId } = useLocalSearchParams<{ lessonId: string }>();
  const { selectedLanguage } = useLanguageStore();
  
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);
  const [error, setError] = useState<string | null>(null);

  const lesson = LESSONS.find((l) => l.id === lessonId);

  useEffect(() => {
    let isMounted = true;

    async function initStream() {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session?.user) {
          setError("Please sign in to start the lesson");
          return;
        }

        const response = await fetch("/api/stream/token", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: session.user.id,
            lessonId,
            languageCode: selectedLanguage,
          }),
        });

        const data = await response.json();
        if (data.error) throw new Error(data.error);

        if (!isMounted) return;

        const videoClient = new StreamVideoClient({
          apiKey: data.apiKey,
          user: {
            id: session.user.id,
            name: session.user.user_metadata?.full_name || session.user.email,
          },
          token: data.token,
        });

        const audioCall = videoClient.call("audio_room", data.callId);
        await audioCall.join({ create: true });

        setClient(videoClient);
        setCall(audioCall);
      } catch (err: any) {
        console.error(err);
        if (isMounted) setError(err.message || "Failed to join call");
      }
    }

    if (lesson) {
      initStream();
    }

    return () => {
      isMounted = false;
    };
  }, [lessonId, selectedLanguage]);

  useEffect(() => {
    return () => {
      if (call) {
        call.leave().catch((err) => {
          if (err.message?.includes('already been left')) {
            return;
          }
          console.error('Error leaving call:', err);
        });
      }
      if (client) {
        client.disconnectUser().catch((err) => {
          console.error('Error disconnecting user:', err);
        });
      }
    };
  }, [call, client]);

  const handleEndCall = useCallback(async () => {
    if (call) {
      try {
        await call.leave();
      } catch (err: any) {
        if (!err.message?.includes('already been left')) {
          console.error('Error leaving call in handleEndCall:', err);
        }
      }
    }
    router.back();
  }, [call, router]);

  if (!lesson) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Lesson not found</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-lingua-purple mt-4">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center px-6">
        <Ionicons name="alert-circle-outline" size={64} color="#ff4b4b" />
        <Text className="text-lg font-poppins-semibold text-text-primary mt-4 text-center">
          Oops! Something went wrong
        </Text>
        <Text className="text-base font-poppins text-text-secondary mt-2 text-center">
          {error}
        </Text>
        <TouchableOpacity 
          onPress={() => router.back()}
          className="mt-8 bg-lingua-purple px-8 py-3 rounded-2xl"
        >
          <Text className="text-white font-poppins-bold">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <SafeAreaView edges={["top"]} style={{ backgroundColor: "#fff" }}>
        {/* Header */}
        <View className="px-4 py-2 flex-row items-center justify-between">
          <View className="flex-row items-center">
            <TouchableOpacity onPress={handleEndCall} className="mr-3">
              <Ionicons name="chevron-back" size={28} color="#001328" />
            </TouchableOpacity>
            <View>
              <Text className="text-lg font-poppins-bold text-text-primary">
                AI Teacher
              </Text>
              <View className="flex-row items-center">
                <View className={`w-2.5 h-2.5 rounded-full mr-1.5 ${client ? 'bg-green-500' : 'bg-gray-300'}`} />
                <Text className="text-xs font-poppins text-text-secondary">
                  {client ? 'Online' : 'Offline'}
                </Text>
              </View>
            </View>
          </View>
          <View className="flex-row items-center space-x-3 gap-3">
            <View className="flex-row items-center bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
              <Ionicons name="mic-outline" size={20} color="#001328" />
              <Text className="text-sm font-poppins-semibold ml-1.5 text-text-primary">Audio</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>

      {client && call ? (
        <StreamVideo client={client}>
          <StreamCall call={call}>
            <AudioLessonContent lesson={lesson} onEndCall={handleEndCall} />
          </StreamCall>
        </StreamVideo>
      ) : (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#6c4ef5" />
          <Text className="mt-4 font-poppins-semibold text-text-primary">Preparing lesson...</Text>
        </View>
      )}
    </View>
  );
}
