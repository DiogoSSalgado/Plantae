import React from "react";
import { View, Text, Image } from "react-native";
import { EditarPerfilTypes } from "../../types/Screen.types";
import styles from "./styles";
import ButtonTransparente from "../../components/ButtonOpacity";
import { useAuth } from "../../hook/auth";

export default function Perfil({ navigation }: EditarPerfilTypes) {
  const { user } = useAuth();

  function handleEditarPerfil() {
    navigation.navigate("EditarPerfil");
  }



  return (
    <View style={styles.container}>
      <View style={styles.row}>
  {/*   <Image source={{ uri: user?.profile_photo_url }} style={styles.img}/> */}
        <Image source={require("../../assets/userpfp.png")} style = {styles.img}/>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text style={styles.titlebold}>{user?.name}</Text>
          <Text style={styles.subtitle}>Apresente aos outros usuários</Text>

          <ButtonTransparente title="Editar" type="primary" onPress={handleEditarPerfil}/>
        </View>
      </View>

{/*       <Text style={styles.titlebold}>DADOS: </Text>
      <CardSocial>
        <>
          <Text style={styles.title}>• PH:</Text>
        </>
      </CardSocial>
      <CardSocial>
        <>
          <Text style={styles.title}>• SALINIDADE:</Text>
        </>
      </CardSocial>
      <CardSocial>
        <>
          <Text style={styles.title}>• CTC:</Text>
        </>
      </CardSocial>
      <CardSocial>
        <>
          <Text style={styles.title}>• MERCÚRIO:</Text>
        </>
      </CardSocial>
      <CardSocial>
        <>
          <Text style={styles.title}>• ARSÊNICO:</Text>
        </>
      </CardSocial>
      
      <Text style={styles.titlebold}>Tamanho do Lote: </Text>
      <Text style={styles.title}>• ACRE/HECTARES: </Text>
      <Text style={styles.title}>Latitude: </Text>
      <Text style={styles.title}>Longitude: </Text> */}


{/*       <Button
        title="Salvar"
        type="primary"
        onPress={() => console.log("Salvar")}
      /> */}
    </View>
  );
}