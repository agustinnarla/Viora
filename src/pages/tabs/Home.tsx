import { ExpenseComponent } from "@/components/home/ExpenseComponent";
import { ItineraryComponent } from "@/components/home/ItineraryComponent";
import { NextTripComponent } from "@/components/home/NextTripComponent";
import { CustomHeaderComponent } from "@/components/ux/CustomHeaderComponent";
import React from "react";
import { View, Text, ScrollView } from "react-native";

export const HomePage = () => {
  return (
    <View>
      <CustomHeaderComponent title="Buen día" profile="AA" />
      <View
        style={{ marginTop: 10, paddingVertical: 10, paddingHorizontal: 10 }}
      >
        <ScrollView>
          <NextTripComponent />
          <ItineraryComponent
            dia="Día 1"
            hora="9:00 pm"
            descripcion="Despegue del avion"
          />
          <ExpenseComponent />
        </ScrollView>
      </View>
    </View>
  );
};
