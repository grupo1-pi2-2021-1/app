import React from 'react';
import InitialPageTemplate from 'components/InitialPageTemplate';

const Welcome = ({navigation}) => {
  const onPress = async () => {
    navigation.navigate('UserInfos');
  };

  return (
    <InitialPageTemplate
      title="Bem vindo ao app do Esterilizador de Ambulâncias"
      subtitle="Realize procedimentos de higienização e esterilização em ambulânicas de forma simples e remota com nosso higienizador"
      buttonTitle="Começar"
      onPress={onPress}
      step={0}
    />
  );
};

export default Welcome;
