/* eslint-disable react/prop-types */
import React from 'react';
import {Text, Btn, ScrollView, View} from 'components/UI';
import theme from 'theme/theme';
import Steps from 'components/Steps';

import {useSelector} from 'react-redux';
import {ambulance} from 'store/selectors';

import {FlatList} from 'react-native';
import {Container} from './styles';
import Item from './Item';

const DATA = [
  {
    name: 'Ambulância tipo A',
    description: 'Grupo 1 de ambulâncias de 4x3m',
    id: '1',
  },
  {
    name: 'Ambulância tipo B',
    description: 'Grupo 2 de ambulâncias de 4x4m',
    id: '2',
  },
  {
    name: 'Ambulância tipo C',
    description: 'Grupo 3 de ambulâncias de 5x4m',
    id: '3',
  },
  {
    name: 'Ambulância tipo D',
    description: 'Grupo 4 de ambulâncias de 5x5m',
    id: '4',
  },
];

const SelectAmbulanceTemplate = ({onInitialPages, onPress}) => {
  const selectedAmbulance = useSelector(ambulance);

  const renderItem = ({item}) => <Item item={item} />;

  const title = onInitialPages
    ? 'Selecione quais ambulâncias serão higienizadas'
    : 'Grupo selecionado de ambulâncias';

  return (
    <Container>
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
          data={DATA}
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
