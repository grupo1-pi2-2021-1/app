import React, {useState} from 'react';
import Input from 'components/UI/Input';
import required from 'validators/required';
import {View} from 'components/UI';

import InitialPageTemplate from 'components/InitialPageTemplate';
// import {Alert} from 'react-native';
// import api from 'services/api';
// import {useDispatch} from 'react-redux';
// import * as Actions from 'store/actions';

const UserInfos = ({navigation}) => {
  // const dispatch = useDispatch();

  const [verificationCode, setVerificationCode] = useState({
    isValid: false,
    value: '',
  });

  const formIsValid = () => {
    return verificationCode.isValid;
  };

  const onPress = async () => {
    navigation.navigate('SelectAmbulance');
    // dispatch(Actions.enableLoader());
    // const params = {}
    // try {
    //   await api.post('/route/', params);
    // } catch (error) {
    //   Alert.alert('Higienizador de Ambulancias', 'Ocorreu um erro ao se conectar com o servidor');
    //   dispatch(Actions.disableLoader());
    // }
  };

  return (
    <InitialPageTemplate
      title="Confirmação do cadastro"
      subtitle="Informe-nos por favor suas informações para que possamos manter seus registros adequadamente"
      buttonTitle="Enviar código"
      onPress={onPress}
      step={2}
      disabledButton={!formIsValid()}>
      <View mt={4}>
        <Input
          label="Código de verificação"
          onChange={value => setVerificationCode(value)}
          value={verificationCode.value}
          keyboardType="numeric"
          rules={[required]}
        />
      </View>
    </InitialPageTemplate>
  );
};

export default UserInfos;
