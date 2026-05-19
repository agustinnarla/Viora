import { OnboardingPage } from "@/pages/auth/Onboarding";
import React, { useRef, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import slides from "@/date/slides";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { ButtonComponent } from "@/components/ux/ButtonComponent";

export default function Onboarding() {
  // Creo variable de estado para controlar en q pantalla estoy
  const [currentIndex, setCurrentIndex] = useState(0);

  // Utilizamos para saber si es la ultima pantalla
  const isLastSlide = currentIndex === slides.length - 1;

  // Referencia al FlatList para controlar el scroll
  const flatListRef = useRef<FlatList>(null);

  // Manejamos el scroll -> replace nos permite que el usuario no pueda volver atras.
  const handleNext = () => {
    if (isLastSlide) {
      router.replace("/(auth)/login");
    } else {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
      });
    }
  };

  // Manejamos el cambio de pantalla al hacer scroll
  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0]?.index || 0);
  }).current;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={slides}
        ref={flatListRef}
        renderItem={({ item }) => <OnboardingPage item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <ButtonComponent
          title={isLastSlide ? "Comenzar" : "Siguiente"}
          onPress={handleNext}
        />
      </View>
    </SafeAreaView>
  );
}
