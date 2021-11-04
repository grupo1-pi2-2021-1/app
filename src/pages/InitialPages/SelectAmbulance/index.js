import React from 'react';
import SelectAmbulanceTemplate from 'components/SelectAmbulanceTemplate';
import {useDispatch, useSelector} from 'react-redux';

import * as Actions from 'store/actions';
import {auth} from 'store/selectors';

const SelectAmbulance = () => {
  const user = useSelector(auth);

  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(
      Actions.login({
        ...user,
        ready: true,
      }),
    );
  };
  return <SelectAmbulanceTemplate onInitialPages onPress={onPress} />;
};

export default SelectAmbulance;
