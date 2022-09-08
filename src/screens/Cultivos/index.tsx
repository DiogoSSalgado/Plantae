import React from "react";
import {
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import CardCultivos from "../../components/CardCultivos";
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

export default function Cultivo() {
  return (
      
      <ScrollView style ={styles.container}>
        <View style={styles.borderbox}>
          <View style={styles.rowSearch}>
            <FontAwesome5 name="search" style={styles.icon} />
            <TextInput placeholder="Pesquisar cultivo" placeholderTextColor='#808080'/>
          </View>
        </View>
        <CardCultivos
            nome="Soja"
            descricao="dspoijudma ld. ~sa!!!
            "
            onPress={() => {
              console.log("Calculadora");
          }}
          onCress={() => {
            console.log("Dicas");
        }}
        />
      <CardCultivos nome="Sargo" descricao="Teste"/>
      <CardCultivos nome="Café" descricao="Teste"/>
      <CardCultivos nome="Laranja" descricao="Teste"/>
      <CardCultivos nome="Milho" descricao="Teste"/>
      <CardCultivos nome="Alho" descricao="Texto"/>
      <CardCultivos nome="Feijão" descricao="Texto"/>    
      <CardCultivos nome="Tomate" descricao="Texto, teste."/>
      <CardCultivos nome="Braquiaria" descricao="Texto"/>
      <CardCultivos nome="Cana-de-açúcar" descricao="Texto"/>
 
{/*         <Image source={require("../../assets/image8.png")} style={styles.imagem}/> */}
{/*         <Button
          title="1º Soja"
          type="primary"
          onPress={() => console.log("Soja")}
        />
        <Button
          title="2º Sorgo"
          type="primary"
          onPress={() => console.log("Sorgo")}
        />
        <Button
          title="3º Café"
          type="primary"
          onPress={() => console.log("Café")}
        />
        <Button
          title="4º Laranja"
          type="primary"
          onPress={() => console.log("Laranja")}
        />
        <Button
          title="5º Milho"
          type="primary"
          onPress={() => console.log("Milho")}
        />
        <Button
          title="6º Alho"
          type="primary"
          onPress={() => console.log("Alho")}
        />
        <Button
          title="7º Feijão"
          type="primary"
          onPress={() => console.log("Feijão")}
        />
        <Button
          title="8º Tomate"
          type="primary"
          onPress={() => console.log("Tomate")}
        />
        <Button
          title="9º Braquiaria"
          type="primary"
          onPress={() => console.log("Braquiaria")}
        />
        <Button
          title="10º Cana"
          type="primary"
          onPress={() => console.log("CanaDeacucar")}
        /> */}
      </ScrollView>
  );
}
