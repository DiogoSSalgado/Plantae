import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { CalcComp } from "../../components"

export default function Calculadora() {
  return (
      <View style={styles.container}>
          <View style={styles.borderbox}> 
            <Text style={styles.textHeader}>Soja</Text> 
          </View>
    
          <CalcComp nome="Soja" />

      </View>
  );
}