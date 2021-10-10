import React from 'react';
import {Image} from 'react-native';
import welcomeImage from 'assets/welcomeImage.png';
import InitialPageTemplate from 'components/InitialPageTemplate';

const Welcome = ({navigation}) => {
  const onPress = async () => {
    navigation.navigate('UserInfos');
  };

  const imageStype = {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 30,
  };

  const WelcomeImage = () => <Image source={welcomeImage} style={imageStype} />;

  return (
    <InitialPageTemplate
      title="Bem vindo ao app do Esterilizador de Ambulâncias"
      subtitle="Realize procedimentos de higienização e esterilização em ambulânicas de forma simples e remota com nosso higienizador"
      buttonTitle="Começar"
      onPress={onPress}
      Image={WelcomeImage}
      step={0}
    />
  );
};

export default Welcome;
