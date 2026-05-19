import { colors } from "@/themes/color";
import { LinearGradient } from "expo-linear-gradient";

import { StyleSheet, View, Image } from "react-native";
export const LinearGradientComponent = () => {
  return (
    <>
      <LinearGradient
        colors={[colors.primary, colors.lightBackground]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      />
      <Image
        source={require("@/assets/images/vioraLogo.png")}
        style={styles.logo}
      />
    </>
  );
};

const styles = StyleSheet.create({
  gradient: {
    height: "30%",
    width: "100%",
    borderRadius: 100,
    top: -60,
    transform: [{ rotate: "-6deg" }],
    position: "absolute",
  },
  logo: {
    width: 75,
    height: 75,
    marginTop: 100,
    alignSelf: "center",
  },
});
