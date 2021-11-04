/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import {View} from 'components/UI';
import {FlatList, Alert} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import * as Actions from 'store/actions';
import api from 'services/api';
import LoadingModal from 'components/LoadingModal';
import {Container} from './styles';

const SelectAmbulanceTemplate = ({
  onPressItem,
  Item,
  path,
  listData = [],
  ...props
}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(listData);
  const fetchData = async () => {
    dispatch(Actions.enableLoader());
    try {
      const response = await api.get(path);
      if (response.data && response.data.length) {
        setData(response.data);
      }
    } catch (error) {
      Alert.alert('Erro', error.message);
    }
    dispatch(Actions.disableLoader());
  };

  useFocusEffect(
    React.useCallback(() => {
      if (path) {
        fetchData();
      }
    }, []),
  );

  const renderItem = ({item, index}) => (
    <Item item={item} index={index} onPress={onPressItem} />
  );

  return (
    <Container>
      <View>
        <LoadingModal />
        <FlatList
          showsVerticalScrollIndicator={false}
          {...props}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingTop: 20}}
        />
      </View>
    </Container>
  );
};

export default SelectAmbulanceTemplate;
