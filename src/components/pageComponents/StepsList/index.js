/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import {View} from 'components/UI';
import ItemCircle from 'components/ItemCircle';
import {FlatList} from 'react-native';
import theme from 'theme/theme';
import {Container} from './styles';

const StepsList = ({currentStep, steps}) => {
  const renderItem = ({index}) => (
    <View>
      <ItemCircle step={index + 1} selected={currentStep === index} />
    </View>
  );

  const separatorItem = () => (
    <View height="100%" width="1px" bg={theme.colors.darkGrey} mx={2} />
  );

  return (
    <Container>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={steps}
        ItemSeparatorComponent={separatorItem}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

export default StepsList;
