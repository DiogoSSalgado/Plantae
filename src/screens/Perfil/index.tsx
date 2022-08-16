import React from "react";
import { View, Text, Image } from "react-native";
import CardSocial from "../../components/CardSocial";
import { AntDesign } from '@expo/vector-icons';
import styles from "./styles";
import Button from "../../components/Button";
import { useAuth } from "../../hook/auth";

export default function Perfil() {
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      <Image source={{ uri: user?.profile_photo_url }} style={styles.img}/>
      <Text style={styles.title}>Nome: {user?.name}</Text>
      <Text style={styles.title}>Email: {user?.email}</Text>
      
      <Text style={styles.titlebold}>DADOS: </Text>
      <CardSocial>
        <>
          <Text style={styles.title}>• PH:</Text>
          <AntDesign name="caretdown" style={styles.icon} />
        </>
      </CardSocial>
      <CardSocial>
        <>
          <Text style={styles.title}>• SALINIDADE:</Text>
          <AntDesign name="caretdown" style={styles.icon} />
        </>
      </CardSocial>
      <CardSocial>
        <>
          <Text style={styles.title}>• CTC:</Text>
          <AntDesign name="caretdown" style={styles.icon} />
        </>
      </CardSocial>
      <CardSocial>
        <>
          <Text style={styles.title}>• MERCÚRIO:</Text>
          <AntDesign name="caretdown" style={styles.icon} />
        </>
      </CardSocial>
      <CardSocial>
        <>
          <Text style={styles.title}>• ARSÊNICO:</Text>
          <AntDesign name="caretdown" style={styles.icon} />
        </>
      </CardSocial>
      
      <Text style={styles.titlebold}>Tamanho do Lote: </Text>
      <Text style={styles.title}>• ACRE/HECTARES </Text>
      <Text style={styles.title}>Latitude: </Text>
      <Text style={styles.title}>Longitude: </Text>

      <Button
        title="Editar"
        type="primary"
        onPress={() => console.log("Editar")}
      />
      <Button
        title="Salvar"
        type="primary"
        onPress={() => console.log("Salvar")}
      />
      </View>
  );
}