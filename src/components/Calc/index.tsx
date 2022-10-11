import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";
import { CultivosProps } from "../../interfaces/Cultivos.interface";
import styles from "./styles";
import { cafe, ranking } from "../../calc/calculadora";
import Button from "../Button";

export default function Calc({...rest}: CultivosProps){

    const [retorno, setRetorno] = useState()

    function calc() {
        setRetorno(ranking())
    }

    return (
        <View style={styles.card}>
            <View style={styles.column}>
                <Text>Ranking</Text> 
                <Button onPress={calc} title="Calcular" type="secondary" />
                <Text>O ranking das culturas na sua terra é: </Text>
                {retorno && retorno.map((i) => {
                    return (
                        <Text key={i} style={styles.rank}>{i}</Text>
                    )
                })}
            </View>
        </View>
    );
}
