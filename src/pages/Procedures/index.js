import React from 'react';
import ListPage from 'components/ListPage';
import Item from 'components/pageComponents/ProcedureItem';

const Procedures = () => {
  const data = [
    {
      name: 'Esterelização completa',
      description:
        'Procedimento completo de limpeza de ambulâncias com tempo mais demorado',
      type: 'Ozônio + UV',
      time: '25:00',
      steps: [],
      id: '1',
    },
    {
      name: 'Esterelização rápida',
      description:
        'Procedimento rápido de limpeza de ambulâncias com tempo reduzido',
      type: 'Ozônio + UV',
      time: '25:00',
      steps: [],
      id: '2',
    },
    {
      name: 'Esterelização com ozônio',
      description: 'Procedimento rápido apenas utilizando gás ozônio',
      type: 'Somente ozônio',
      time: '25:00',
      steps: [],
      id: '3',
    },
    {
      name: 'Esterelização com Luz UV',
      description: 'Procedimento rápido apenas utilizando luz UV',
      type: 'Somente UV',
      time: '25:00',
      steps: [],
      id: '4',
    },
  ];
  return <ListPage Item={Item} data={data} />;
};

export default Procedures;
