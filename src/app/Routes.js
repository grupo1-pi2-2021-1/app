import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from 'styled-components/native';
import {useSelector} from 'react-redux';
import {auth} from 'store/selectors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import theme from 'theme/theme';

import Historic from 'pages/Historic';
import Settings from 'pages/Settings';
import Procedures from 'pages/Procedures';
import ProcedureDetails from 'pages/ProcedureDetails';
import ProcedureExecution from 'pages/ProcedureExecution';
import Welcome from 'pages/InitialPages/Welcome';
import UserInfos from 'pages/InitialPages/UserInfos';
import ConfirmSignUp from 'pages/InitialPages/ConfirmSignUp';
import SelectAmbulance from 'pages/InitialPages/SelectAmbulance';

const Routes = () => {
  const user = useSelector(auth);

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const defaultStackOptions = {
    title: '',
    headerBackTitle: 'Voltar',
    headerTintColor: theme.colors.primary,
  };

  const tabOptions = {
    tabBarActiveTintColor: theme.colors.primary,
    tabBarInactiveTintColor: theme.colors.black,
    headerStyle: {backgroundColor: theme.colors.primary},
    headerTintColor: theme.colors.white,
  };

  const proceduresOptions = {
    headerStyle: {backgroundColor: theme.colors.primary},
    headerTintColor: theme.colors.white,
  };

  const procedures = () => (
    <Stack.Navigator screenOptions={proceduresOptions}>
      <Stack.Screen
        options={{title: 'Procedimentos'}}
        name="Procedures"
        component={Procedures}
      />
      <Stack.Screen
        options={{title: 'Procedimento'}}
        name="ProcedureDetails"
        component={ProcedureDetails}
      />
    </Stack.Navigator>
  );

  const signedIn = () => (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      <Tab.Navigator screenOptions={tabOptions}>
        <Tab.Screen
          name="Home"
          component={procedures}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="list" color={color} size={size} />
            ),
            header: () => null,
            title: 'Procedimentos',
          }}
        />
        <Tab.Screen
          name="Historic"
          component={Historic}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="clock" color={color} size={size} />
            ),
            title: 'Histórico',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="settings" color={color} size={size} />
            ),
            title: 'Configurações',
          }}
        />
      </Tab.Navigator>
    </>
  );

  const signedOut = () => (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <Stack.Navigator screenOptions={defaultStackOptions}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="UserInfos" component={UserInfos} />
        <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUp} />
        <Stack.Screen name="SelectAmbulance" component={SelectAmbulance} />
      </Stack.Navigator>
    </>
  );

  const execution = () => {
    <Stack.Navigator>
      <Stack.Screen name="ProcedureExecution" component={ProcedureExecution} />
    </Stack.Navigator>;
  };

  const navigationScreens = () => {
    if (!user || !user.id) {
      return signedOut();
    }

    if (user.executingProcedure) {
      return execution();
    }

    return signedIn();
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer theme={{colors: {background: theme.colors.white}}}>
          {navigationScreens()}
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};

export default Routes;
