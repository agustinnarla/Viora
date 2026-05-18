import { OnboardingPrimary } from "@/pages/onboarding/page1";
import { OnboardingSecondary } from "@/pages/onboarding/page2";
import React from "react";
import { Text, View } from "react-native";

const page = {
  page1: <OnboardingPrimary />,
  page2: <OnboardingSecondary />,
};

export default function Onboarding() {
  return <View style={{ flex: 1 }}>{page.page1}</View>;
}
