import React, { useState } from 'react';
import Navigation from "../../navigations";
import {AuthProvider} from "../../hook/auth";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

const App = () => {
  const [showapp, setShowapp] = useState(false);

  const onDone = () => {
    setShowapp(true);
  };

  const onSkip = () => {
    setShowapp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showapp ? (
        <AuthProvider>
          <Navigation/>
        </AuthProvider>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          doneLabel="Continuar"
          showsVerticalScrollIndicator={true}
          showNextButton={false}
          showSkipButton={false}
        />
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 0,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 0,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    margin: 5,
    paddingVertical: 30,
  },
  introTitleStyle: {
    paddingTop: 16,
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16, 
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: 'Veja o que você precisa para obter sucesso no seu plantio',
    title: 'Dicas de Cultivo',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    },
    backgroundColor: '#BF915D',
  },
  {
    key: 's2',
    title: 'Comunidade',
    text: 'Receba dicas de outros usuários sobre como melhorar seu cultivo',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Clima',
    text: 'Exame climático da sua região para a escolha do plantio mais adequado e da época mais apropriada',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    },
    backgroundColor: '#22bcb5',
  },
];