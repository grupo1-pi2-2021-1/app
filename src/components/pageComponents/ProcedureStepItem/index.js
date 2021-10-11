/* eslint-disable react/prop-types */
import React from 'react';
import {Text, View, Touchable} from 'components/UI';
import theme from 'theme/theme';
import ItemCircle from 'components/ItemCircle';

const Item = ({item, index}) => {
  return (
    <View row alignItems="center" my={2}>
      <ItemCircle step={index + 1} />
      <View flex={1} ml={2}>
        <Text
          fontSize={theme.font.sizes.SM}
          color={theme.colors.darkGrey}
          fontWeight="bold">
          {item.name}
        </Text>
        <Text fontSize={theme.font.sizes.SM}>{item.description}</Text>
      </View>
    </View>
  );
};

export default Item;
