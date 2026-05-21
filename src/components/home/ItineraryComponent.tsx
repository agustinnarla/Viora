import { colors } from "@/themes/color";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface ItineraryComponentProps {
  dia: string;
  hora: string;
  descripcion: string;
}
export const ItineraryComponent = ({
  dia,
  hora,
  descripcion,
}: ItineraryComponentProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Itinerario</Text>
      <View>
        <Text style={styles.dayTitle}>{dia}</Text>
        <View style={styles.item}>
          <View style={styles.containerDiv}>
            <View style={styles.circle} />
            <View style={styles.line} />
          </View>

          <View style={styles.containerDate}>
            <Text style={styles.time}>{hora}</Text>
            <Text style={styles.description}>{descripcion}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "InterSemiBold",
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  item: {
    flexDirection: "row",
    gap: 20,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.secondary,
    alignSelf: "center",
  },
  line: {
    height: 50,
    width: 2,
    backgroundColor: colors.secondary,
  },
  containerDiv: {
    marginVertical: 10,
    alignItems: "center",
    gap: 10,
  },
  dayTitle: {
    fontFamily: "InterBold",
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  containerDate: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.04)",
    gap: 10,
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 18,
  },
  time: {
    fontFamily: "Inter",
    color: "grey",
  },
  description: {
    fontFamily: "InterBold",
  },
});
