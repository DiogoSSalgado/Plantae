import React, {useEffect, useState} from "react";
import { View, Text, Image } from "react-native";
import { EditarPerfilTypes } from "../../types/Screen.types";
import styles from "./styles";
import ButtonTransparente from "../../components/ButtonOpacity";
import { useAuth } from "../../hook/auth";
import { useMap, IMap } from "../../hook/map";

export default function Perfil({ navigation }: EditarPerfilTypes) {
  const { user } = useAuth();
  const map = useMap();
  const [coord, setCoord] = useState<IMap | null>();

  useEffect(() => {
    map.then((response)=>{
      setCoord(response)
    })
}, []);

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
      <Text> Lat:  {coord?.long} </Text>
      <Text> Long:  {coord?.lat}</Text>
    </View>
  );
}