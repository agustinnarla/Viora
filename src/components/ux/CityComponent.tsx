import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";

export const CityComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/barcelona.jpg")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: "50%",
    height: "50%",
    overflow: "hidden",
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    opacity: 0.9,
    position: "relative",
  },
});
