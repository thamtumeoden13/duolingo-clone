import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants/images";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View className="items-center mb-10">
          <Image 
            source={images.mascotLogo} 
            className="w-20 h-20" 
            resizeMode="contain" 
          />
          <Text className="text-h1 text-text-primary mt-2">muolingo</Text>
          <Link href="/onboarding" asChild>
            <TouchableOpacity className="mt-4 bg-purple px-6 py-3 rounded-xl">
              <Text className="text-white font-bold">Go to Onboarding</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View className="mb-8">
          <Text className="text-h2 text-text-primary mb-4">Typography</Text>
          <View className="gap-y-4">
            <Text className="text-h1 text-text-primary">H1 - Screen Title</Text>
            <Text className="text-h2 text-text-primary">H2 - Section Title</Text>
            <Text className="text-h3 text-text-primary">H3 - Module Title</Text>
            <Text className="text-h4 text-text-primary">H4 - Subheading</Text>
            <Text className="text-body-lg text-text-secondary">Body Large - Important content</Text>
            <Text className="text-body-md text-text-secondary">Body Medium - Body text</Text>
            <Text className="text-body-sm text-text-secondary">Body Small - Supporting text</Text>
            <Text className="text-caption text-text-secondary">Caption - Labels, meta text</Text>
          </View>
        </View>

        <View className="mb-8">
          <Text className="text-h2 text-text-primary mb-4">Colors</Text>
          
          <Text className="text-h4 mb-2">Primary</Text>
          <View className="flex-row flex-wrap gap-4 mb-4">
            <ColorBox color="bg-purple" name="Purple" />
            <ColorBox color="bg-deep-purple" name="Deep Purple" />
            <ColorBox color="bg-blue" name="Blue" />
            <ColorBox color="bg-green" name="Green" />
          </View>

          <Text className="text-h4 mb-2">Semantic</Text>
          <View className="flex-row flex-wrap gap-4 mb-4">
            <ColorBox color="bg-success" name="Success" />
            <ColorBox color="bg-warning" name="Warning" />
            <ColorBox color="bg-streak" name="Streak" />
            <ColorBox color="bg-error" name="Error" />
            <ColorBox color="bg-info" name="Info" />
          </View>

          <Text className="text-h4 mb-2">Neutrals</Text>
          <View className="flex-row flex-wrap gap-4">
            <ColorBox color="bg-text-primary" name="Text Primary" />
            <ColorBox color="bg-text-secondary" name="Text Secondary" />
            <ColorBox color="bg-border" name="Border" />
            <ColorBox color="bg-surface" name="Surface" />
            <ColorBox color="bg-background" name="Background" border />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function ColorBox({ color, name, border }: { color: string; name: string; border?: boolean }) {
  return (
    <View className="items-center">
      <View className={`w-16 h-16 rounded-xl ${color} ${border ? 'border border-border' : ''}`} />
      <Text className="text-caption text-text-secondary mt-1">{name}</Text>
    </View>
  );
}
