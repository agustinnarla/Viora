import { Tabs } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "@/themes/color";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          left: 20,
          right: 20,
          bottom: 25,
          height: 70,
          borderRadius: 30,
          paddingTop: 10,
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={focused ? styles.tabBarIconFocused : styles.tabBarIcon}
            >
              <Ionicons
                name="home-outline"
                size={20}
                color={focused ? colors.secondary : "black"}
              />
            </View>
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={[
                styles.label,
                focused ? { color: colors.secondary } : { color: "black" },
              ]}
            >
              {focused ? "Inicio" : ""}
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          title: "Viajes",
          tabBarIcon: ({ focused, color }) => (
            <View
              style={focused ? styles.tabBarIconFocused : styles.tabBarIcon}
            >
              <Ionicons
                name="airplane-outline"
                size={20}
                color={focused ? colors.secondary : "black"}
              />
            </View>
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={[
                styles.label,
                focused ? { color: colors.secondary } : { color: "black" },
              ]}
            >
              {focused ? "Viajes" : ""}
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={focused ? styles.tabBarIconFocused : styles.tabBarIcon}
            >
              <Ionicons
                name="add-circle-outline"
                size={20}
                color={focused ? colors.secondary : "black"}
              />
            </View>
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={[
                styles.label,
                focused ? { color: colors.secondary } : { color: "black" },
              ]}
            >
              {focused ? "" : ""}
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Guardados",
          tabBarIcon: ({ focused }) => (
            <View
              style={focused ? styles.tabBarIconFocused : styles.tabBarIcon}
            >
              <Ionicons
                name="save-outline"
                size={20}
                color={focused ? colors.secondary : "black"}
              />
            </View>
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={[
                styles.label,
                focused ? { color: colors.secondary } : { color: "black" },
              ]}
            >
              {focused ? "Guardados" : ""}
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ focused }) => (
            <View
              style={focused ? styles.tabBarIconFocused : styles.tabBarIcon}
            >
              <Ionicons
                name="person-outline"
                size={20}
                color={focused ? colors.secondary : "black"}
              />
            </View>
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={[
                styles.label,
                focused ? { color: colors.secondary } : { color: "black" },
              ]}
            >
              {focused ? "Perfil" : ""}
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarIconFocused: {
    borderTopWidth: 2,
    borderTopColor: colors.secondary,
    padding: 2,
  },
  tabBarIcon: {
    padding: 2,
  },
  label: {
    fontFamily: "InterMedium",
    fontSize: 12,
  },
});
