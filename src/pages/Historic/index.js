import React from 'react';
import {View, Text} from 'components/UI';
import ListPage from 'components/ListPage';
import Item from 'components/pageComponents/HistoricItem';

const Historic = () => {
  const data = [
    {
      date: 'Segunda, 9 de Agosto',
      time: '21:30',
      userName: 'Luiz Guilherme',
      procedureName: 'Esterelização completa',
    },
    {
      date: 'Terça, 10 de Agosto',
      time: '21:30',
      userName: 'João Pedro',
      procedureName: 'Esterelização completa',
    },
    {
      date: 'Quarta, 11 de Agosto',
      time: '21:32',
      userName: 'Luiz Guilherme',
      procedureName: 'Esterelização completa',
    },
  ];
  return <ListPage Item={Item} data={data} />;
};

export default Historic;
