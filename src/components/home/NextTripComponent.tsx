import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { colors } from "@/themes/color";
import Ionicons from "@expo/vector-icons/Ionicons";

export const NextTripComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Proximo Viaje</Text>

      <TouchableOpacity activeOpacity={0.9} style={styles.card}>
        <ImageBackground
          source={require("@/assets/images/paris.jpg")}
          style={styles.image}
        >
          <View style={styles.overlay} />

          <View style={styles.content}>
            <View>
              <Text style={styles.city}>Paris</Text>

              <Text style={styles.date}>12 - 21 Febrero</Text>
            </View>

            <View style={styles.footer}>
              <View style={styles.travelersContainer}>
                <Ionicons name="people-outline" size={16} color="#FAFAFA" />

                <Text style={styles.travelers}>3 viajeros</Text>
              </View>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Abrir</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "InterSemiBold",
    marginBottom: 16,
    letterSpacing: 0.5,
  },

  card: {
    height: 300,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.04)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },

  image: {
    flex: 1,
    overflow: "hidden",
    justifyContent: "space-between",
    resizeMode: "cover",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.30)",
  },

  content: {
    flex: 1,
    justifyContent: "space-between",
    padding: 24,
  },

  city: {
    color: "#FAFAFA",
    fontSize: 34,
    fontFamily: "InterBold",
    letterSpacing: -1,
  },

  date: {
    color: "#D4D4D8",
    marginTop: 6,
    fontSize: 15,
    fontFamily: "InterMedium",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  travelersContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  travelers: {
    color: "#FAFAFA",
    fontFamily: "InterMedium",
    fontSize: 14,
  },

  button: {
    backgroundColor: "rgba(255,255,255,0.12)",

    paddingHorizontal: 18,
    paddingVertical: 10,

    borderRadius: 100,

    borderWidth: 1,
    borderColor: colors.secondary,
  },

  buttonText: {
    color: "#FAFAFA",
    fontFamily: "InterSemiBold",
    fontSize: 13,
  },
});
