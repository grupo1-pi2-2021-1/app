import React from 'react';
import {Modal, ActivityIndicator} from 'react-native';
import {View} from 'components/UI';
import {useSelector} from 'react-redux';

import {loader} from 'store/selectors';

const LoadingModal = () => {
  const loading = useSelector(loader);

  return (
    <Modal visible={loading} transparent>
      <View flex={1} alignItems="center" justifyContent="center">
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  );
};

export default LoadingModal;
