import React from 'react';
import {useDispatch} from 'react-redux';
import * as Actions from 'store/actions';
import ListPage from 'components/ListPage';
import Item from 'components/pageComponents/ProcedureStepItem';
import {Text, Btn} from 'components/UI';
import theme from 'theme/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ButtonView} from './styles';

const ProcedureDetails = ({route}) => {
  const dispatch = useDispatch();
  const procedure = route.params.item;
  
  const onPress = () => {
    dispatch(Actions.initProcedure(procedure));
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
