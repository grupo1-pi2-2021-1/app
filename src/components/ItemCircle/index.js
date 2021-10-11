/* eslint-disable react/prop-types */
import React from 'react';
import {Text} from 'components/UI';
import theme from 'theme/theme';
import {Container} from './styles';

const ItemCircle = ({step}) => {
  return (
    <Container>
      <Text
        textAlign="center"
        fontWeight="bold"
        fontSize={theme.font.sizes.ML}
        color={theme.colors.white}
        my={1}>
        {step}
      </Text>
    </Container>
  );
};

export default ItemCircle;
