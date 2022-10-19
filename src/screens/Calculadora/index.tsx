import React from "react";
import { ScrollView, View, Text } from "react-native";
import styles from "./styles";

import { CalcComp } from "../../components"

export default function Calculadora() {
  return (
      <View style={styles.container}>
          <View style={styles.borderbox}> 
            <Text style={styles.textHeader}>Ranking</Text> 
          </View>
          <ScrollView>
            <CalcComp/>
          </ScrollView>

      </View>
  );
}