import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

export const NextTripComponent = () => {
  return (
    <View>
      <Text style={styles.title}>Proximo Viaje</Text>
      <BlurView intensity={100}>
        <View style={styles.blurView}>
          <Text>Tokio</Text>
          <Text>12 - 21 de febrero</Text>
          <Text>3 viajeros</Text>
          <Text>Abrir</Text>
        </View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "InterSemiBold",
    letterSpacing: 0.5,
  },
  blurView: {
    justifyContent: "center",
    alignItems: "center",
  },
});
