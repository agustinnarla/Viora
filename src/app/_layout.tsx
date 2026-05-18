import { Stack } from "expo-router";
import { useFonts } from "expo-font";
export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: require("@/assets/fonts/Inter.ttf"),
    InterBold: require("@/assets/fonts/InterBold.ttf"),
  });
  if (!loaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
