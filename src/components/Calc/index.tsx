import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";
import { CultivosProps } from "../../interfaces/Cultivos.interface";
import styles from "./styles";
import { cafe } from "../../calc/calculadora";
import Button from "../Button";

export default function Calc({...rest}: CultivosProps){

    const [retorno, setRetorno] = useState()

    function calc() {
        setRetorno(cafe())
    }

    return (
        <View style={styles.card}>
            <View style={styles.column}>
                <Text>Café</Text> 
                <Button onPress={calc} title="Calcular" type="secondary" />
                <Text>{retorno}</Text>
            </View>
        </View>
    );
}
