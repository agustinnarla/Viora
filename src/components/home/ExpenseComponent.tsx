import { colors } from "@/themes/color";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const ExpenseComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Gastos</Text>
      <View style={styles.expenseContainer}>
        <Text style={styles.totalAmount}>
          Gastos totales: <Text style={styles.amount}>$111</Text>
        </Text>
        <View style={styles.divider} />
        <View style={styles.expenseDetails}>
          <Text style={styles.expenseItem}>Comida</Text>
          <Text style={styles.expenseItem}>Lugar</Text>
          <Text style={styles.expenseItem}>$2222</Text>
        </View>
        <View style={styles.divider} />
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
  expenseContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    gap: 5,
  },
  expenseDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  totalAmount: {
    fontFamily: "Inter",
  },
  amount: {
    fontFamily: "InterBold",
  },
  expenseItem: {
    fontFamily: "Inter",
  },
  divider: {
    height: 1,
    backgroundColor: colors.secondary,
    opacity: 0.4,
  },
});
