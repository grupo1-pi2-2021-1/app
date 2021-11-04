/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import {Text, Btn, View} from 'components/UI';
import theme from 'theme/theme';
import Steps from 'components/Steps';

import {useSelector, useDispatch} from 'react-redux';
import {ambulance} from 'store/selectors';
import LoadingModal from 'components/LoadingModal';
import api from 'services/api';
import * as Actions from 'store/actions';

import {Alert, FlatList} from 'react-native';
import {Container} from './styles';
import Item from './Item';

const SelectAmbulanceTemplate = ({onInitialPages, onPress}) => {
  const dispatch = useDispatch();
  const selectedAmbulance = useSelector(ambulance);
  const [ambulances, setAmbulances] = useState([]);
  const fetchAmbulances = async () => {
    dispatch(Actions.enableLoader());
    try {
      const response = await api.get('/ambulances');
      if (response.data && response.data.length) {
        setAmbulances(response.data);
      }
    } catch (error) {
      Alert.alert('Erro', error.message);
    }
    dispatch(Actions.disableLoader());
  };

  useEffect(() => {
    fetchAmbulances();
  }, []);

  const renderItem = ({item}) => <Item item={item} />;

  const title = onInitialPages
    ? 'Selecione quais ambulâncias serão higienizadas'
    : 'Grupo selecionado de ambulâncias';

  return (
    <Container>
      <LoadingModal />
      <View flex={onInitialPages ? 0.85 : 1}>
        <FlatList
          ListHeaderComponent={() => (
            <Text
              textAlign="center"
              fontWeight="bold"
              fontSize={theme.font.sizes.L}
              mb={4}
              mx={2}>
              {title}
            </Text>
          )}
          data={ambulances}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      {onInitialPages ? (
        <View flex={0.15}>
          <Btn
            disabled={!selectedAmbulance.id}
            title="Continuar"
            onPress={onPress}
          />
          <Steps step={3} />
        </View>
      ) : null}
    </Container>
  );
};

export default SelectAmbulanceTemplate;
