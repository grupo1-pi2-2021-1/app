import React from 'react';
import ListPage from 'components/ListPage';
import Item from 'components/pageComponents/ProcedureItem';

const Procedures = ({navigation}) => {
  const data = [
    {
      name: 'Esterelização completa',
      description:
        'Procedimento completo de limpeza de ambulâncias com tempo mais demorado',
      type: 'Ozônio + UV',
      time: '25:00',
      steps: [
        {
          name: 'Posicionar o aparelho',
          description: 'Coloque o aparelho higienizador dentro da ambulância',
        },
        {
          name: 'Fechar todas as janelas',
          description:
            'Verifique se todas as frestas da ambulância estão seladas',
        },
        {
          name: 'Ligar aparelho',
          description: 'Ligue o aparelho higienizador no interruptor lateral',
        },
        {
          name: 'Rotina automática',
          description:
            'Será disparada uma rotina automática de luz UV + ozônio',
          time: '10:00',
        },
        {
          name: 'Finalizar',
          description:
            'Desligue o aparelho higienizador no interruptor lateral',
        },
      ],
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

  const onPress = item => {
    navigation.navigate('ProcedureDetails', {item});
  };
  return <ListPage Item={Item} data={data} onPressItem={onPress} />;
};

export default Procedures;
