import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeIn } from "react-native-reanimated";
import { MapComponent } from "@/components/ux/MapComponent";

import { ButtonComponent } from "@/components/ux/ButtonComponent";
import { colors } from "@/themes/color";
import { router } from "expo-router";
export const OnboardingPrimary = () => {
  const nextPage = () => {
    router.push("/(auth)/login");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={styles.header} entering={FadeIn.duration(2000)}>
        <Image
          source={require("@/assets/images/vioraLogo.png")}
          style={{ width: 50, height: 50 }}
        />
        <Text style={{ fontFamily: "InterBold", letterSpacing: 1 }}>VIORA</Text>
      </Animated.View>

      <MapComponent />

      <View style={styles.footer}>
        <ButtonComponent title="Siguiente" onPress={nextPage} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    paddingVertical: 26,
    paddingHorizontal: 24,
    alignItems: "center",
  },
});
