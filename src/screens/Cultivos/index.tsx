import React from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import { LoginTypes } from "../../types/Screen.types";

export default function Cultivo() {
  return (
    <View style={styles.container}>
        <KeyboardAvoidingView>
        <Text style={styles.title}>Opções para cultivo</Text>
          <View style={styles.viewimage}>
            <Image source={require("../../assets/image8.png")} style={styles.imagem}/>
          </View>
        </KeyboardAvoidingView>
    </View>
  );
}
