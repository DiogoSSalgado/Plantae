import React from "react";
import { View, Text, Image } from "react-native";
import { EditarPerfilTypes } from "../../types/Screen.types";
import styles from "./styles";
import Calc from "../../components/Calc";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import ButtonTransparente from "../../components/ButtonOpacity";
import { useAuth } from "../../hook/auth";

export default function Soja() {
    return (
        <View style={styles.container}>
            <View style={styles.borderbox}> 
                    <Text style={styles.textHeader}>Soja</Text> 
                </View>
      
        <Calc nome="Soja"/>
      
              
      
    
              
      
      
    

        </View>
      );
    }