import { createStackNavigator } from "@react-navigation/stack";
import { EditarPerfilStackParamList } from "../types/Screen.types";
import { PerfilScreen, EditarPerfilScreen, SairScreen } from "../screens";
import React from "react";

const Stack = createStackNavigator<EditarPerfilStackParamList>();

export default function PerfilNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Perfil" component={PerfilScreen} />
            <Stack.Screen name="EditarPerfil" component={EditarPerfilScreen} />
            <Stack.Screen name="Sair" component={SairScreen} />
        </Stack.Navigator>
    );
}