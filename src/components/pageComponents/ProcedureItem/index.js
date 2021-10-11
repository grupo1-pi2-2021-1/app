/* eslint-disable react/prop-types */
import React from 'react';
import {Text, View, Touchable} from 'components/UI';
import theme from 'theme/theme';

const Item = ({item, onPress}) => {
  return (
    <>
      <Touchable onPress={() => onPress(item)}>
        <View my={2} p={4} bg={theme.colors.backgroundBlack} borderRadius={12}>
          <Text
            color={theme.colors.primary}
            fontSize={theme.font.sizes.S}
            mb={2}>
            {item.type}
          </Text>
          <Text
            color={theme.colors.white}
            fontSize={theme.font.sizes.ML}
            fontWeight="bold"
            mb={2}>
            {item.name}
          </Text>
          <Text color={theme.colors.white} fontSize={theme.font.sizes.M} mb={4}>
            {item.description}
          </Text>
          <View row alignItems="center" justifyContent="space-between">
            <Text
              color={theme.colors.white}
              fontSize={theme.font.sizes.SM}
              fontWeight="bold"
              flex={0.2}>
              {item.time}
            </Text>
            <View bg={theme.colors.primary} py={1} px={2} borderRadius={30}>
              <Text color={theme.colors.white} fontSize={theme.font.sizes.S}>
                Ver mais
              </Text>
            </View>
          </View>
        </View>
      </Touchable>
    </>
  );
};

export default Item;
