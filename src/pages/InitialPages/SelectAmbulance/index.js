import React from 'react';
import SelectAmbulanceTemplate from 'components/SelectAmbulanceTemplate';
import {useDispatch} from 'react-redux';

import * as Actions from 'store/actions';

const SelectAmbulance = () => {
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(
      Actions.login({
        name: 'Teste',
        id: '1',
        token: 'Teste',
      }),
    );
  };
  return <SelectAmbulanceTemplate onInitialPages onPress={onPress} />;
};

export default SelectAmbulance;
