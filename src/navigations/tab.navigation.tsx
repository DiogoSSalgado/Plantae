import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SairScreen, CultivosScreen, MapScreen, PerfilScreen, QrCodeScreen, CameraScreen, ArquivoScreen, CalculadoraScreen, ScrollScreen, ChatScreen} from "../screens";
import colors from "../styles/colors";
import { Ionicons, MaterialCommunityIcons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import ChatNavigation from "./chat.navigation";
import EditarPerfilNavigation from "./perfil.navigation";


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.white},
        tabBarActiveBackgroundColor: colors.white,
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveBackgroundColor: colors.white,
        tabBarInactiveTintColor: colors.gray,
      }}
    >
      <Tab.Screen
        name="Perfil"
        component={EditarPerfilNavigation}
        options={{
         headerTitle: 'Plantae',
/*          headerTitleStyle: { fontsize: 10},  */
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="user-circle" size={24} color={color}/>
          ),
        }}
      />
{/*       <Tab.Screen
        name="Mapa"
        component={MapScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="map" size={24} color={colors.white} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Comunidade"
        component={ChatNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="users" size={24} color={color} />
          ),
        }}
      />
{/*       <Tab.Screen
        name="QrCode"
        component={QrCodeScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="qrcode-scan" size={24} color={colors.white} />
          ),
        }}
      /> */}

{/*       <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="camera" size={24} color={colors.white} />
          ),
        }}
      /> */}

{/*       <Tab.Screen
        name="Arquivos"
        component={ArquivoScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="file-account" size={24} color={colors.white} />
          ),
        }}
      /> */}
    <Tab.Screen
        name="Cultivos"
        component={CultivosScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialIcons name="grass" size={24} color={color} />
          ),
        }}
      /> 
 

{/*      <Tab.Screen
        name="Sair"
        component={SairScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
          <Ionicons name="exit" size={24} color={color} />
          ),
        }}
      /> */}

    </Tab.Navigator>
  );
}