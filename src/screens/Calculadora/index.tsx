import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  ImageBackground,
} from "react-native";
import Button from "../../components/AltButton";
import styles from "./styles";

export default function Calculadora() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/fundocalc.png")}
        style={styles.container}
      >
        <View style={styles.backgroundrec}>
          <Text style={styles.title}> Calculadora Fertilizante</Text>
          <Text style={styles.texto}> Selecione tipo </Text>
          <Text style={styles.texto}> Selecione cultivo </Text>
          <Text style={styles.texto}> Selecione nutriente</Text>
          <Text style={styles.texto}> Selecione nutriente </Text>
          <Text style={styles.texto}> Selecione nutriente </Text>
        </View>
        <Button
          title="Calcular"
          type="third"
          onPress={() => console.log("Calcular")}
        />

      </ImageBackground>
    </View>
  );
}
