import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    mon: require("../assets/fonts/Montserrat-Regular.ttf"),
    "mon-sb": require("../assets/fonts/Montserrat-SemiBold.ttf"),
    "mon-b": require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="(modals)/reserve"
          options={{
            title: `Reservar ${id}`,
            presentation: "modal",
            headerLeft: () => {
              {
                if (process.env.EXPO_OS === "ios") {
                  return (
                    <TouchableOpacity onPress={() => router.back()}>
                      <Ionicons
                        name="close-outline"
                        size={24}
                        color={"white"}
                      />
                    </TouchableOpacity>
                  );
                }
              }
            },
          }}
        />
        <Stack.Screen
          name="listing/[id]"
          options={{ headerTitle: "", headerTransparent: true }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar animated style="auto" />
    </ThemeProvider>
  );
}
