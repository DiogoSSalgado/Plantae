import React from "react";
import { Text, View, Image } from "react-native";
import { IMensagemState, IMensagem } from "../../interfaces/Mensagem.interface";
import styles from "./styles";
import { format } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';

export default function Card({ data }: IMensagemState) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: data.imagem }} style={styles.img} />
      <View style={styles.cardtexto}>
        <Text style={styles.user}>{data.user.name} </Text>
        <Text style={styles.data}> 
          {format(new Date(data.created_at), "dd 'de' MMMM 'às' HH:mm", { locale: ptBR })}
        </Text>
        <Text style={styles.titulo}>{data.titulo}</Text>
        <Text style={styles.msg}>{data.mensagem}</Text>
        <View style={styles.topicos}>
          {data.topicos.map((i) => (
            <View key={i.id} style={styles.topic}>
              <Text>{i.topico}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
