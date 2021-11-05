/* eslint-disable react/prop-types */
import React from 'react';
import {Text, View, Touchable} from 'components/UI';
import theme from 'theme/theme';
import moment from 'moment';

moment.locale('pt-BR');

const Item = ({item, onPress}) => {
  return (
    <>
      <Touchable onPress={onPress}>
        <View p={2}>
          <Text fontWeight="bold" fontSize={theme.font.sizes.M} mb={2}>
            {item.hour.substring(0, 9)}
          </Text>
          <View row alignItems="center" justifyContent="center">
            <Text
              fontSize={theme.font.sizes.SM}
              color={theme.colors.darkGrey}
              flex={0.4}>
              RESPONSÁVEL
            </Text>
            <Text
              fontSize={theme.font.sizes.SM}
              color={theme.colors.darkGrey}
              flex={0.4}>
              PROCEDIMENTO
            </Text>
            <Text
              fontSize={theme.font.sizes.SM}
              color={theme.colors.darkGrey}
              flex={0.2}>
              HORA
            </Text>
          </View>
          <View alignSelf="stretch" height={1} bg={theme.colors.grey} my={1} />
          <View row alignItems="center" justifyContent="center">
            <Text fontSize={theme.font.sizes.SM} fontWeight="bold" flex={0.4}>
              {item.name}
            </Text>
            <Text fontSize={theme.font.sizes.SM} fontWeight="bold" flex={0.4}>
              {item.title}
            </Text>
            <Text fontSize={theme.font.sizes.SM} fontWeight="bold" flex={0.2}>
              {item.hour.substring(11)}
            </Text>
          </View>
          <View alignSelf="stretch" height={1} bg={theme.colors.grey} my={1} />
        </View>
      </Touchable>
    </>
  );
};

export default Item;
