import { colors } from "@/themes/color";
import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const LoginPage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Login</Text>
      </View>
    </SafeAreaView>
  );
};
