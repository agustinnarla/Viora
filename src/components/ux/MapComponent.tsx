import React from "react";
import { Image, Text, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

export const MapComponent = () => {
  return (
    <Animated.View
      entering={FadeIn.duration(2000)}
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "20%",
        marginTop: 10,
      }}
    >
      <Image
        source={require("@/assets/images/mapa.jpg")}
        style={{
          position: "absolute",
          overflow: "hidden",
          width: "90%",
          height: "100%",
          alignSelf: "center",
          borderRadius: 10,
          opacity: 0.8,
        }}
      />
      <Text style={{ fontFamily: "InterBold", fontSize: 30 }}>
        Organiza tu viaje
      </Text>
      <Text style={{ fontFamily: "Inter", fontSize: 20 }}>asdasd</Text>
    </Animated.View>
  );
};
