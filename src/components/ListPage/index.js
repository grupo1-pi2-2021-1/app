/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import {View} from 'components/UI';
import {FlatList} from 'react-native';
import {Container} from './styles';

const SelectAmbulanceTemplate = ({onPressItem, Item, data, ...props}) => {
  const renderItem = ({item, index}) => (
    <Item item={item} index={index} onPress={onPressItem} />
  );

  return (
    <Container>
      <View>
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
