import React from "react";
import { TextInput, View, Text } from "react-native";
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons'; 
import { CultivosProps } from "../../interfaces/Cultivos.interface";
import styles from "./styles";

export default function CardCultivos({descricao, onPress, ...rest}: CultivosProps){
    const my_variable = require('../../assets/userpfp.png');

    return (
        <View style={styles.card}>
            <View style={styles.column}>
            <Text>Calculadora</Text> 
                <TextInput
                    style={styles.input}
                    placeholder="PH"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="CTC"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Salinidade"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mercúrio"
                    keyboardType="numeric"
                />

            </View>
        </View>
    );
}
