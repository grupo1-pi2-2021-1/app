/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import {View} from 'components/UI';
import {FlatList} from 'react-native';
import {Container} from './styles';

const SelectAmbulanceTemplate = ({onPressItem, Item, data, ...props}) => {
  const renderItem = ({item}) => <Item item={item} onPress={onPressItem} />;

  return (
    <Container>
      <View>
        <FlatList
          {...props}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </Container>
  );
};

export default SelectAmbulanceTemplate;
