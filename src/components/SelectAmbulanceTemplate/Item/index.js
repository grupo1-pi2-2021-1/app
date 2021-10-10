/* eslint-disable react/prop-types */
import React from 'react';
import {Text, View, Touchable} from 'components/UI';
import theme from 'theme/theme';
import Icon from 'react-native-vector-icons/Feather';

import {useDispatch, useSelector} from 'react-redux';
import * as Actions from 'store/actions';
import {ambulance} from 'store/selectors';

const Item = ({item}) => {
  const dispatch = useDispatch();
  const selectedAmbulance = useSelector(ambulance);

  const selectAmbulance = () => {
    dispatch(Actions.selectAmbulance(item));
  };

  const myAmbulance = selectedAmbulance.id === item.id;

  return (
    <>
      <Touchable onPress={selectAmbulance}>
        <View p={2}>
          <Text fontWeight="bold" fontSize={theme.font.sizes.ML} my={1}>
            {item.name}
          </Text>
          <View row alignItems="center" justifyContent="center">
            <Text
              fontSize={theme.font.sizes.M}
              my={1}
              color={myAmbulance ? theme.colors.primary : theme.colors.black}>
              {item.description}
            </Text>
            {myAmbulance ? (
              <Icon name="check" size={25} color={theme.colors.primary} />
            ) : null}
          </View>
        </View>
      </Touchable>
      <View alignSelf="stretch" height={1} bg={theme.colors.grey} m={2} />
    </>
  );
};

export default Item;
