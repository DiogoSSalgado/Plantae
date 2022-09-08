import React from "react";
import { Text, View, Image } from "react-native";
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons'; 
import { CultivosProps } from "../../interfaces/Cultivos.interface";
import styles from "./styles";
import colors from "../../styles/colors";

export default function CardCultivos({nome, descricao, onPress, ...rest}: CultivosProps){
    const my_variable = require('../../assets/userpfp.png');

    return (
        <View style={styles.card}>
            <View style={styles.row}>
            {/* <Image style={styles.img} source={my_variable}/> */}
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text style={styles.titlebold}>{nome}</Text>
                    <Text style={styles.subtitle}>{descricao}</Text>
                    <View style={styles.iconview}>
                        <Ionicons style={styles.icon} name="calculator" size={14} color={colors.darkgray} onPress={onPress}{...rest}/>
                        <Entypo style={styles.icon} name="line-graph" size={14} color={colors.darkgray} onPress={onPress}{...rest}/>
                        <MaterialIcons style={styles.icon} name="grass" size={14} color={colors.darkgray} onPress={onPress}{...rest}/>
                    </View>
                </View>
            </View>
        </View>
    );
}
