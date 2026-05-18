import { colors } from "@/themes/color";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

interface ButtonComponentProps {
  title: string;
  onPress: () => void;
}
export const ButtonComponent = ({ title, onPress }: ButtonComponentProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      activeOpacity={0.7}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontFamily: "Inter",
    fontSize: 16,
  },
});
