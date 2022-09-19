import React from "react";
import { View, Text, Image } from "react-native";
import { EditarPerfilTypes } from "../../types/Screen.types";
import styles from "./styles";
import ButtonTransparente from "../../components/ButtonOpacity";
import { useAuth } from "../../hook/auth";

export default function Perfil({ navigation }: EditarPerfilTypes) {
  const { user } = useAuth();

  function handleSair() {
    navigation.navigate("Sair");
  }



  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={require("../../assets/userpfp.png")} style = {styles.img}/>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text style={styles.titlebold}>{user?.name}</Text>
          <Text style={styles.subtitle}>Apresente-se aos outros usuários</Text>

          <ButtonTransparente title="Sair" type="primary" onPress={handleSair}/>
        </View>
      </View>
    </View>
  );
}