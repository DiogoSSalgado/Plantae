import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SairScreen, CultivosScreen, MapScreen, PerfilScreen, QrCodeScreen, CameraScreen, ArquivoScreen, CalculadoraScreen} from "../screens";
import colors from "../styles/colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "#B2DCF2"},
        tabBarActiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveBackgroundColor: colors.secondary,
        tabBarInactiveTintColor: colors.white,
      }}
    >
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Mapa"
        component={MapScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="map" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Cultivos"
        component={CultivosScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="tree" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="QrCode"
        component={QrCodeScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="qrcode-scan" size={24} color={colors.white} />
          ),
        }}
      />

      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="camera" size={24} color={colors.white} />
          ),
        }}
      />

      <Tab.Screen
        name="Arquivos"
        component={ArquivoScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="file-account" size={24} color={colors.white} />
          ),
        }}
      />

    <Tab.Screen
        name="Calc"
        component={CalculadoraScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="file-account" size={24} color={colors.white} />
          ),
        }}
      />

      <Tab.Screen
        name="Sair"
        component={SairScreen}
        options={{
          tabBarIcon: () => (
          <Ionicons name="exit" size={24} color={colors.white} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}