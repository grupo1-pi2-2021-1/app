/* eslint-disable radix */
import React, {useEffect, useState, useRef} from 'react';
import {Text, Btn, View, ScrollView, Touchable} from 'components/UI';
import {useSelector, useDispatch} from 'react-redux';
import * as Actions from 'store/actions';
import {procedure} from 'store/selectors';
import theme from 'theme/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import StepsList from 'components/pageComponents/StepsList';
import {ButtonView, RondedView} from './styles';

const ProcedureDetails = ({navigation, route}) => {
  const dispatch = useDispatch();
  const currentProcedure = useSelector(procedure);
  const [step] = useState(route.params ? route.params.step || 0 : 0);
  const [currentStep] = useState(currentProcedure.steps[step]);
  const [nextStep] = useState(
    currentProcedure.steps.length > step + 1
      ? currentProcedure.steps[step + 1]
      : null,
  );
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [paused, setPaused] = useState(false);
  const minutesRef = useRef(0);
  const secondsRef = useRef(0);
  const interval = useRef(null);

  const initTime = () => {
    interval.current = setInterval(() => {
      if (minutesRef.current === 0 && secondsRef.current === 0) {
        clearInterval(interval.current);
        interval.current = 0;
        return;
      }

      if (secondsRef.current === 0) {
        setMinutes(minutesRef.current - 1);
        minutesRef.current -= 1;
        setSeconds(59);
        secondsRef.current = 59;
        return;
      }

      setSeconds(secondsRef.current - 1);
      secondsRef.current -= 1;
    }, 1000);
  };

  const generateTime = () => {
    if (currentStep.time) {
      const [totalMinutes, totalSeconds] = currentStep.time.split(':');
      setMinutes(parseInt(totalMinutes));
      setSeconds(parseInt(totalSeconds));
      minutesRef.current = parseInt(totalMinutes);
      secondsRef.current = parseInt(totalSeconds);
      initTime();
    }
  };

  useEffect(() => {
    navigation.setOptions({title: currentStep.name});
    generateTime();
  }, []);

  const onPress = () => {
    if (!!currentStep.time && minutes !== 0 && seconds !== 0) {
      if (interval.current) {
        clearInterval(interval.current);
        interval.current = 0;
        setPaused(true);
        return;
      }
      setPaused(false);
      initTime();
      return;
    }

    navigation.push('ProcedureExecution', {step: step + 1});
  };

  const onPressStop = () => {
    dispatch(Actions.endProcedure());
  };

  const shadowStyle = {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 12,
    padding: 10,
    marginTop: -60,
    backgroundColor: 'rgba(255,255,255,0.8)',
    marginHorizontal: 20,
  };

  const formatTime = value => `${value < 10 ? `0${value}` : value}`;

  const Time = () => (
    <Text fontSize={70} textAlign="center">
      {`${formatTime(minutes)}:${formatTime(seconds)}`}
    </Text>
  );

  const Ronded = () => (
    <RondedView>
      {currentStep.time ? (
        <Time />
      ) : (
        <Icon name="pause" size={120} color={theme.colors.primary} />
      )}
    </RondedView>
  );

  const StopButton = () => (
    <Touchable onPress={onPressStop}>
      <View alignItems="center">
        <AntDesignIcon name="lock" size={20} />
        <Text>Parar</Text>
      </View>
    </Touchable>
  );

  return (
    <View flex={1}>
      <View flex={0.15} bg={theme.colors.primary} />
      <View flex={0.85}>
        <View style={shadowStyle}>
          <StepsList steps={currentProcedure.steps} currentStep={step} />
          <Text
            fontWeight="bold"
            textAlign="center"
            fontSize={theme.font.sizes.L}
            mt={3}>
            {currentStep.time ? 'Tempo restante' : 'Aguardando aprovação'}
          </Text>
          <Ronded />
          <Text fontWeight="bold" textAlign="center">
            {currentStep.name}
          </Text>
          <Text textAlign="center">{currentStep.description}</Text>
          {nextStep ? (
            <Text mt={3} textAlign="center">
              {`Próximo passo: ${currentStep.name}`}
            </Text>
          ) : null}
        </View>
        <View row alignItems="center" mt={3} mx={3}>
          <View flex={0.85}>
            <Btn
              onPress={onPress}
              title={
                !paused && !!currentStep.time && minutes !== 0 && seconds !== 0
                  ? 'Pausar'
                  : 'Continuar'
              }
            />
          </View>
          <View flex={0.15}>
            <StopButton />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProcedureDetails;
