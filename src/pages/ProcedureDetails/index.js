import React from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from 'store/actions';
import ListPage from 'components/ListPage';
import Item from 'components/pageComponents/ProcedureStepItem';
import {Text, Btn} from 'components/UI';
import theme from 'theme/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from 'services/api';
import {ButtonView} from './styles';
import { auth } from 'store/selectors';

const ProcedureDetails = ({route}) => {
  const dispatch = useDispatch();
  const user = useSelector(auth);
  const procedure = route.params.item;

  const onPress = async () => {
    dispatch(Actions.enableLoader());
    try {
      await api.post('/addProcedureHistory', {
        user_id: user.id,
        procedure_id: procedure.id,
      });
      dispatch(Actions.initProcedure(procedure));
    } catch (error) {
      Alert.alert('Erro', error.message);
    }
    dispatch(Actions.disableLoader());
  };

  const header = (
    <Text fontWeight="bold" mb={4} fontSize={theme.font.sizes.ML}>
      {`${procedure.steps.length} Etapas`}
    </Text>
  );

  return (
    <>
      <ListPage
        Item={Item}
        listData={procedure.steps}
        ListHeaderComponent={header}
      />
      <ButtonView>
        <Btn
          onPress={onPress}
          title={<Icon name="play" color={theme.colors.white} size={25} />}
        />
      </ButtonView>
    </>
  );
};

export default ProcedureDetails;
