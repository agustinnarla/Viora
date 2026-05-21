import { NextTripComponent } from "@/components/home/NextTripComponent";
import { CustomHeaderComponent } from "@/components/ux/CustomHeaderComponent";
import React from "react";
import { View, Text } from "react-native";

export const HomePage = () => {
  return (
    <View>
      <CustomHeaderComponent title="Buen día" profile="AA" />
      <View
        style={{ marginTop: 10, paddingVertical: 10, paddingHorizontal: 10 }}
      >
        <NextTripComponent />
      </View>
    </View>
  );
};
