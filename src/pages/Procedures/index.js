import React, {useEffect, useState} from 'react';
import ListPage from 'components/ListPage';
import Item from 'components/pageComponents/ProcedureItem';

const Procedures = ({navigation}) => {
  const onPress = item => {
    navigation.navigate('ProcedureDetails', {item});
  };
  return <ListPage Item={Item} path="/proceduresSteps" onPressItem={onPress} />;
};

export default Procedures;
