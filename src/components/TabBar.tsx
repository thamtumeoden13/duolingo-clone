import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Home, BookOpen, MessageCircle, User, Sparkles } from "lucide-react-native";
import Animated, { 
  useAnimatedStyle, 
  withTiming, 
  useSharedValue, 
  Easing,
} from "react-native-reanimated";
import { useEffect } from "react";
import { colors } from "@/constants/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const ICONS = {
  index: Home,
  learn: BookOpen,
  "ai-teacher": Sparkles,
  chat: MessageCircle,
  profile: User,
};

export default function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const tabWidth = width / state.routes.length;
  const translateX = useSharedValue(state.index * tabWidth);

  useEffect(() => {
    translateX.value = withTiming(state.index * tabWidth, {
      duration: 300,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  }, [state.index]);

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View 
      style={[
        styles.container, 
        { paddingBottom: insets.bottom > 0 ? insets.bottom : 10 }
      ]}
      className="flex-row bg-white border-t border-gray-200"
    >
      {/* Active Indicator Circle */}
      <Animated.View 
        style={[
          styles.indicatorContainer, 
          { width: tabWidth },
          animatedIndicatorStyle
        ]}
      >
        <View 
          className="bg-green-500 rounded-full items-center justify-center"
          style={{ width: 45, height: 45 }}
        />
      </Animated.View>

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title !== undefined ? options.title : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const Icon = ICONS[route.name as keyof typeof ICONS] || Home;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={{ flex: 1, alignItems: "center", justifyContent: "center", height: 60 }}
            activeOpacity={0.8}
            accessibilityRole={"tab"}
            accessibilityState={{ selected: isFocused }}
            accessibilityLabel={label}
          >
            <View className="items-center justify-center">
              <Icon 
                size={24} 
                color={isFocused ? "#FFFFFF" : colors.neutral.textSecondary} 
                strokeWidth={isFocused ? 2.5 : 2}
              />
              {!isFocused && (
                <Text 
                  style={{ 
                    color: colors.neutral.textSecondary,
                    fontSize: 12,
                    marginTop: 4,
                    fontFamily: "Poppins-Medium"
                  }}
                >
                  {label}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: "row",
    position: "relative",
  },
  indicatorContainer: {
    position: "absolute",
    top: 1.0, // (60 - 45) / 2 approx, since container height is 80 but we use 60 for touchables
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  },
});
