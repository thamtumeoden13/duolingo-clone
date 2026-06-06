import { images } from "@/constants/images";
import { LANGUAGES } from "@/data/languages";
import { useLanguageStore } from "@/store/languageStore";
import { Language, LanguageCode } from "@/types/learning";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LanguageSelectScreen() {
    const { setSelectedLanguage } = useLanguageStore();
    const [selectedCode, setSelectedCode] = useState<string>(LANGUAGES[0].code);

    const renderItem = ({ item }: { item: Language }) => {
        const isSelected = item.code === selectedCode;
        return (
            <TouchableOpacity
                onPress={() => setSelectedCode(item.code)}
                className={`flex-row items-center p-4 mb-3 bg-white border-2 rounded-2xl ${
                    isSelected ? "border-lingua-purple" : "border-gray-100"
                }`}
                activeOpacity={0.8}
            >
                <View className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 items-center justify-center bg-gray-50">
                    <Image source={{ uri: item.flag }} className="w-full h-full" resizeMode="cover" />
                </View>
                <View className="flex-1 ml-4">
                    <Text className="h4 text-text-primary">
                        {item.name}
                    </Text>
                    <Text className="body-sm text-text-secondary">
                        {item.learners} learners
                    </Text>
                </View>
                {isSelected && (
                    <View className="w-6 h-6 rounded-full bg-lingua-purple items-center justify-center">
                        <Ionicons name="checkmark" size={16} color="#fff" />
                    </View>
                )}
            </TouchableOpacity>
        );
    };

    const handleContinue = () => {
        setSelectedLanguage(selectedCode as LanguageCode);
        router.replace("/");
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            {/* Header */}
            <View className="flex-row items-center px-4 py-4">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="w-10 h-10 items-center justify-center rounded-xl border border-gray-100"
                >
                    <Ionicons name="close" size={24} color="#001328" />
                </TouchableOpacity>
                <Text className="flex-1 text-center h3">
                    I want to learn...
                </Text>
                <View className="w-10" />
            </View>

            {/* Language list */}
            <FlatList
                data={LANGUAGES}
                keyExtractor={(item) => item.code}
                renderItem={renderItem}
                contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 10, pb: 140 }}
                showsVerticalScrollIndicator={false}
            />

            {/* Bottom Container */}
            <View className="absolute bottom-0 left-0 right-0 bg-white px-5 pt-4 pb-8 border-t border-gray-100">
                <TouchableOpacity
                    className="bg-lingua-purple rounded-2xl items-center py-4 shadow-sm"
                    activeOpacity={0.85}
                    onPress={handleContinue}
                >
                    <Text className="font-poppins-semibold text-white text-base">
                        CONTINUE
                    </Text>
                </TouchableOpacity>
                <View className="items-center mt-6">
                    <Image 
                        source={images.earth} 
                        style={{ width: '100%', height: 100 }} 
                        resizeMode="contain" 
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}