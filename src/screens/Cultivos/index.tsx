import React from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import Button from "../../components/AltButton";

export default function Cultivo() {
  return (
    <View style={styles.container}>
        <KeyboardAvoidingView>
        <Text style={styles.title}>Opções para cultivo</Text>
          <View style={styles.viewimage}>
            <Image source={require("../../assets/image8.png")} style={styles.imagem}/>
          </View>
        </KeyboardAvoidingView>
        <Button
          title="1º Soja"
          type="primary"
          onPress={() => console.log("Soja")}
        />
        <Button
          title="2º Café"
          type="primary"
          onPress={() => console.log("Café")}
        />
        <Button
          title="3º Milho"
          type="primary"
          onPress={() => console.log("Milho")}
        />
    </View>
  );
}
