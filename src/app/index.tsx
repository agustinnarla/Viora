import { colors } from "@/themes/color";
import { router } from "expo-router";
import { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInLeft,
} from "react-native-reanimated";

export default function SplashScreen() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/(auth)/onboarding");
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        entering={FadeIn.duration(2000)}
        style={styles.logoContainer}
      >
        <Animated.Image
          source={require("../../assets/images/vioraLogo.png")}
          style={styles.logo}
        />
        <Animated.Text style={styles.text}>VIORA</Animated.Text>
        <View style={{ marginTop: 40 }}>
          <Animated.View
            entering={FadeInLeft.duration(200)}
            style={{ height: 2, width: 100, backgroundColor: colors.primary }}
          />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightBackground,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 150,
  },
  text: {
    color: "black",
    letterSpacing: 1,
    fontFamily: "InterBold",
  },
});
