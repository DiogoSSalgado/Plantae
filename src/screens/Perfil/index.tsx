import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, Alert } from "react-native";
import { EditarPerfilTypes } from "../../types/Screen.types";
import styles from "./styles";
import ButtonTransparente from "../../components/ButtonOpacity";
import { useAuth } from "../../hook/auth";
import { useMap, IMap } from "../../hook/map";
import colors from "../../styles/colors";
import { INutri, INutriField } from "../../interfaces/Nutrientes.interface";
import { apiNutri } from "../../services/data";
import { AxiosError } from "axios";
import { IResponse } from "../../interfaces/Response.interface";
import { ButtonComp, LoadingComp } from "../../components";

export default function Perfil({ navigation }: EditarPerfilTypes) {
  const { user } = useAuth();
  const map = useMap();
  const [coord, setCoord] = useState<IMap | null>();
  const [data, setData] = useState<INutriField>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    map.then((response) => {
      setCoord(response)
    })
  }, []);

  async function handleSubmit() {
    try {
      setIsLoading(true);
      if (data?.N && data.P && data.K && data.Ca && data.Mg && data.S) {
        const response = await apiNutri.create(data);
        console.log(response.data)
      } else {
        Alert.alert("Preencha todos os campos!");
      }
    } catch (error) {
      const err = error as AxiosError;
      const data = err.response?.data as IResponse;
      let message = "";
      console.log(data)
      if (data.data) {
        for (const [key, value] of Object.entries(data.data)) {
          message = `${message} ${value}`;
        }
      }
      Alert.alert(`${data.message} ${message}`);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  function handleSair() {
    navigation.navigate("Sair");
  }

  function handleChange(item: INutriField) {
    setData({ ...data, ...item });
  }

  return (

    <>
      {isLoading ? (
        <LoadingComp />
      ) : (
          <View style={styles.container}>
            <View style={styles.row}>
              <Image source={require("../../assets/userpfp.png")} style={styles.img} />
              <View style={{ flex: 1, flexDirection: 'column' }}>
                <Text style={styles.titlebold}>{user?.name}</Text>
                <Text style={styles.subtitle}>Apresente-se aos outros usuários</Text>

                <ButtonTransparente title="Sair" type="primary" onPress={handleSair} />
              </View>
            </View>
            <View style={{ marginLeft: 20 }}>
              <Text> Lat:  {coord?.long} </Text>
              <Text> Long:  {coord?.lat}</Text>
              <View style={{ flexDirection: "row" }}>
                <Text>N: </Text>
                <TextInput
                  onChangeText={(i) => handleChange({ N: i })} />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text>P: </Text>
                <TextInput
                  onChangeText={(i) => handleChange({ P: i })} />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text>K: </Text>
                <TextInput
                  onChangeText={(i) => handleChange({ K: i })} />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text>Ca: </Text>
                <TextInput
                  onChangeText={(i) => handleChange({ Ca: i })} />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text>Mg: </Text>
                <TextInput
                  onChangeText={(i) => handleChange({ Mg: i })} />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text>S: </Text>
                <TextInput
                  onChangeText={(i) => handleChange({ S: i })} />
              </View>
              <ButtonComp title="Submit" type="secondary" onPress={handleSubmit}></ButtonComp>
            </View>
          </View>
        )}
    </>

  );
}