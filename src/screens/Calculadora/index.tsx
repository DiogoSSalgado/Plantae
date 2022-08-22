import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  ImageBackground,
} from "react-native";
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
        </View>

      </ImageBackground>
    </View>
  );
}
