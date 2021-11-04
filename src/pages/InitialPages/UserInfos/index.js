import React, {useState} from 'react';
import Input from 'components/UI/Input';
import required from 'validators/required';
import phoneValidator from 'validators/phone';
import phoneMask from 'masks/phoneMask';
import {View} from 'components/UI';

import InitialPageTemplate from 'components/InitialPageTemplate';
import {Alert} from 'react-native';
import api from 'services/api';
import {useDispatch} from 'react-redux';
import * as Actions from 'store/actions';

const UserInfos = ({navigation}) => {
  const dispatch = useDispatch();

  const [phone, setPhone] = useState({
    isValid: false,
    value: '',
  });

  const [name, setName] = useState({
    isValid: false,
    value: '',
  });

  const formIsValid = () => {
    return phone.isValid && name.isValid;
  };

  const onPress = async () => {
    dispatch(Actions.enableLoader());
    const params = {
      name: name.value,
      phone: phone.value,
    };

    try {
      const response = await api.post('/user', params);
      const {data} = response;
      if (data.id && data.id.length) {
        dispatch(
          Actions.login({
            ...params,
            id: data.id[0],
          }),
        );
        navigation.navigate('ConfirmSignUp');
      }
      dispatch(Actions.disableLoader());
    } catch (error) {
      Alert.alert(
        'Higienizador de Ambulancias',
        'Ocorreu um erro ao se conectar com o servidor',
      );
      dispatch(Actions.disableLoader());
    }
  };

  return (
    <InitialPageTemplate
      title="Informações do responsável"
      subtitle="Informe-nos por favor suas informações para que possamos manter seus registros adequadamente"
      buttonTitle="Enviar código"
      onPress={onPress}
      step={1}
      disabledButton={!formIsValid()}>
      <View mt={3}>
        <Input
          label="Nome do responsável"
          onChange={value => setName(value)}
          value={name.value}
          autoCapitalize="words"
          rules={[required]}
        />
      </View>
      <View mt={2}>
        <Input
          label="Telefone"
          onChange={value => setPhone(value)}
          value={phone.value}
          inputMask={phoneMask}
          keyboardType="numeric"
          rules={[required, phoneValidator]}
        />
      </View>
    </InitialPageTemplate>
  );
};

export default UserInfos;
