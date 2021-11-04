import React from 'react';
import ListPage from 'components/ListPage';
import Item from 'components/pageComponents/HistoricItem';
import {useSelector} from 'react-redux';
import {auth} from 'store/selectors';

const Historic = () => {
  const user = useSelector(auth);

  return <ListPage Item={Item} path={`/${user.id}/listProcedures`} />;
};

export default Historic;
