import React from "react";
import {
  View,
  TextInput,
} from "react-native";
import styles from "./styles";
import CardCultivos from "../../components/CardCultivos";
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import { cafe, soja, milho, feijao, sorgo, tomate, capim, cana, alho, laranja } from "../../calc/calculadora"

var cafeS = cafe()
var sojaS = soja()
var milhoS = milho()
var feijaoS = feijao()
var sorgoS = sorgo()
var tomateS = tomate()
var capimS = capim()
var canaS = cana()
var alhoS = alho()
var laranjaS = laranja()

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
            descricao="A soja é uma oleaginosa, pertencente à família Fabaceae, que abrange também plantas como
            o feijão, a lentilha e a ervilha. A cultura desse grão é uma das mais importantes para a
            economia mundial, devido às suas várias possibilidades de aplicação. Na indústria
            alimentícia, por exemplo, ela é usada como matéria-prima na produção de massas,
            chocolates, óleos, margarinas e maioneses, além de diversos outros alimentos."
            onPress={() => {
              return (
                <Text></Text>
              )
            }}
        />

      <CardCultivos 
        nome="Café" 
        descricao="Além da sua importância no desenvolvimento econômico do Brasil, ele trouxe uma
        contribuição política e social significativa. O café proporcionou a sustentação do
        aparelho político-administrativo e forneceu recursos para a instalação do parque
        industrial nacional"
        onPress={() => {
          console.log("Café")
        }}
      />

      <CardCultivos 
        nome="Laranja" 
        descricao="A laranja é uma das frutas mais populares e consumidas da família Rutaceae (família dos
          cítricos). Além disso, também podemos usar folhas e flores para extração de óleos essenciais que
          são muito utilizados na medicina natural e perfumarias."
        onPress={() => {
          console.log("Laranja")
        }}
      />
      <CardCultivos 
        nome="Milho" 
        descricao="O milho pertence à família Poaceae, ao gênero Zea e sua espécie única recebe o nome de
        Zea mays. É um cereal de alto valor nutricional e por isso mesmo está sendo largamente
        utilizado na composição de rações animais e outros alimentos humanos.
        É um dos grãos mais assistidos de tecnologias de plantio e colheita, é cosmopolita e sua
        produção em 2004 chegou 600 milhões de toneladas em todo o mundo."
        onPress={() => {
          console.log("Milho")
        }}
      />
      <CardCultivos 
        nome="Alho" 
        descricao="O alho é considerado um tempero natural de grande utilidade na culinária. É usado no
        preparo de diversos pratos e alimentos. Sempre foi utilizado no tratamento e prevenção de várias doenças. Hoje sabe-se de sua
        grande importância no combate a problemas relacionados ao coração, câncer e infecções."
        onPress={() => {
          console.log("Alho")
        }}
      />
      <CardCultivos 
        nome="Feijão" 
        descricao="Altamente nutritivo, o feijão se destaca por sua versatilidade na cozinha, sendo a base
        para pratos tradicionais como a feijoada, dobradinha e tropeiro. A leguminosa é rica em proteínas, ferro, cálcio, vitaminas do complexo B, entre outros."
        onPress={() =>{
          console.log("Feijão")
        }}
        />    
      <CardCultivos 
        nome="Tomate" 
        descricao="O tomate está entre as hortaliças mais consumidas no mundo. É uma fonte importante de
        vitaminas A e C. Destaca-se entre as hortaliças como fonte de vitamina B1. Também
        fornece pequenas quantidades de sais minerais, como manganês e potássio."
        onPress={() =>{
          console.log("Tomate")
        }}
      />
{/*       <CardCultivos nome="Braquiaria" descricao="Texto"/> */}
      <CardCultivos nome="Cana-de-açúcar" 
        descricao="A cana-de-açúcar é um grupo de espécie de gramíneas, nativas das regiões tropicais da
        Ásia. A planta tem entre dois e seis metros de altura, o que varia de acordo com a
        quantidade de sol que ela recebe diariamente, e possui caules robustos, fibrosos e
        articulados, ricos em sacarose."
        onPress={() =>{
          console.log("Cana")
        }}
      />
 
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
