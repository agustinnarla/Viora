import React from "react";
import {
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import slides from "@/date/slides";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/themes/color";

// Asignamos item a la pagina
interface OnboardingPageProps {
  item: (typeof slides)[0];
}
export const OnboardingPage = ({ item }: OnboardingPageProps) => {
  // Obtiene el ancho y altura de la pantalla
  const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, { width }]}>
        <View style={styles.header}>
          <Image
            source={require("@/assets/images/vioraLogo.png")}
            style={styles.logo}
          />
          <Text style={styles.logoText}>VIORA</Text>
        </View>

        <View
          style={[
            styles.imageWrapper,
            { width: width - 48, height: height * 0.52 },
          ]}
        >
          <Image source={item.image} style={styles.image} resizeMode="cover" />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.lightBackground,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 50,
    height: 50,
  },
  logoText: {
    fontFamily: "InterBold",
  },
  imageWrapper: {
    borderRadius: 24,
    overflow: "hidden",
    marginVertical: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 6,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 0.3,
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: "InterBold",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: "Inter",
    fontSize: 15,

    textAlign: "center",
    color: "#6B7280",
  },
});
