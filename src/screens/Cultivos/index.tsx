import React from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import Button from "../../components/AltButton";
import { ScrollView } from "react-native-gesture-handler";

export default function Cultivo() {
  return (
    <View style={styles.container}>
        <Button
          title="1º Soja"
          type="primary"
          onPress={() => console.log("Soja")}
        />
        <Button
          title="6º Sargo"
          type="primary"
          onPress={() => console.log("Sargo")}
        />
        <Button
          title="2º Café"
          type="primary"
          onPress={() => console.log("Café")}
        />
        <Button
          title="7º Laranja"
          type="primary"
          onPress={() => console.log("Laranja")}
        />
        <Button
          title="3º Milho"
          type="primary"
          onPress={() => console.log("Milho")}
        />
        <Button
          title="8º Alho"
          type="primary"
          onPress={() => console.log("Alho")}
        />
        <Button
          title="4º Feijão"
          type="primary"
          onPress={() => console.log("Feijão")}
        />
        <Button
          title="9º Tomate"
          type="primary"
          onPress={() => console.log("Tomate")}
        />
        <Button
          title="5º Braquiaria"
          type="primary"
          onPress={() => console.log("Braquiaria")}
        />
        <Button
          title="10º Cana"
          type="primary"
          onPress={() => console.log("CanaDeacucar")}
        />
    </View>
  );
}
