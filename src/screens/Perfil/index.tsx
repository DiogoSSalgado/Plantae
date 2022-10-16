import React, {useEffect, useState} from "react";
import { View, Text, Image } from "react-native";
import { EditarPerfilTypes } from "../../types/Screen.types";
import styles from "./styles";
import ButtonTransparente from "../../components/ButtonOpacity";
import { useAuth } from "../../hook/auth";
import { useMap, IMap } from "../../hook/map";
import colors from "../../styles/colors";

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
      <View style={{flex: 1, alignItems: "center"}}>
        <Text> Lat:  {coord?.long} </Text>
        <Text> Long:  {coord?.lat}</Text>
        <Text style={{
            fontSize: 40,
            backgroundColor: colors.lightGreen,
            textAlign: "center",
            marginTop: 40,
            width: "80%",
            padding: 7,
            borderRadius: 20
          }}>
            VAI TOMAR NO CU JUNIN
        </Text>
      </View>
    </View>
  );
}