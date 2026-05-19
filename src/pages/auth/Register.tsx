import { LinearGradientComponent } from "@/components/ux/LinearGradientComponent";
import { colors } from "@/themes/color";
import { ButtonComponent } from "@/components/ux/ButtonComponent";
import AntDesign from "@expo/vector-icons/AntDesign";

import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import Animated, { FadeIn } from "react-native-reanimated";

export const RegisterPage = () => {
  const handleRegister = () => {
    router.replace("/(tabs)");
  };

  return (
    <Animated.View entering={FadeIn.duration(2000)} style={{ flex: 1 }}>
      <LinearGradientComponent />
      <View style={styles.form}>
        <Text style={styles.title}>Registrar</Text>
        <View style={styles.containerForm}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="ejemplo@gmail.com" />
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="***********"
            secureTextEntry
          />
          <Text style={styles.label}>Confirmar Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="***********"
            secureTextEntry
          />
          <View style={styles.divider} />
          <View style={styles.googleButton}>
            <TouchableOpacity>
              <AntDesign name="google" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.googleText}>Registrar con Google</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <ButtonComponent title="Registrar sesión" onPress={() => {}} />
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingHorizontal: 28,
    marginTop: 20,
    justifyContent: "center",
  },
  title: {
    fontFamily: "InterBold",
    fontSize: 24,
  },
  containerForm: {
    marginVertical: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap: 20,
    borderRadius: 10,
    backgroundColor: colors.lightBackground,
    elevation: 5,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  label: {
    fontFamily: "InterSemiBold",
  },
  input: {
    borderWidth: 0.5,
    borderColor: colors.primary,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  registrar: {
    alignItems: "center",
    marginTop: 10,
  },
  registrarButton: {
    borderBottomWidth: 2,
    borderColor: colors.primary,
  },
  registrarText: {
    fontFamily: "InterSemiBold",
    color: colors.primary,
    fontSize: 14,
  },
  buttonContainer: {
    alignItems: "center",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: colors.secondary,
    opacity: 0.2,
  },
  googleButton: {
    width: "100%",
    height: 58,
    borderRadius: 18,

    backgroundColor: "rgba(255,255,255,0.04)",

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    gap: 12,
  },
  googleText: {
    fontFamily: "InterMedium",
    fontSize: 15,
  },
});
