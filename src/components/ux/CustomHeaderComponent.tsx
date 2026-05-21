import { colors } from "@/themes/color";
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

interface CustomHeaderComponentProps {
  title: string;
  profile?: string;
}
export const CustomHeaderComponent = ({
  title,
  profile,
}: CustomHeaderComponentProps) => {
  return (
    <LinearGradient colors={["rgba(91,95,239,0.85)", "rgba(9,9,11,0)"]}>
      <SafeAreaView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <Text style={styles.title}>{title}</Text>
        {profile && <Text style={styles.profile}>{profile}</Text>}
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: "InterBold",
  },
  profile: {
    fontFamily: "InterBold",
    backgroundColor: "rgba(255,255,255,0.08)",
    padding: 10,
    borderRadius: 101,
  },
});
