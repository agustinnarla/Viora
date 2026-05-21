import { Stack } from "expo-router";
import { useFonts } from "expo-font";
export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: require("@/assets/fonts/Inter.ttf"),
    InterBold: require("@/assets/fonts/InterBold.ttf"),
    InterSemiBold: require("@/assets/fonts/InterSemiBold.ttf"),
    InterMedium: require("@/assets/fonts/InterMedium.ttf"),
  });
  if (!loaded) return null;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="/(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="/(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
