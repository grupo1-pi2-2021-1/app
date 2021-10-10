import React from 'react';
import {SafeAreaView, StatusBar, Platform} from 'react-native';

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

  const safeAreaViewStyle = {
    flexGrow: 1,
    backgroundColor: theme.colors.white,
  };

  const defaultStackOptions = {
    title: '',
    headerBackTitle: 'Voltar',
    headerTintColor: theme.colors.primary,
  };

  const procedures = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Procedures"
        component={Procedures}
        // options={{header: () => <Header />}}
      />
      <Stack.Screen
        name="ProcedureDetails"
        component={ProcedureDetails}
        // options={{header: () => <Header />}}
      />
    </Stack.Navigator>
  );

  const signedIn = () => (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={procedures} />
      <Tab.Screen name="Historic" component={Historic} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );

  const signedOut = () => (
    <Stack.Navigator
      defaultScreenOptions={{
        headerBackTitle: 'Voltar',
        headerBackImage: <Icon name="arrow-left" size={30} />,
      }}>
      <Stack.Screen
        name="Welcome"
        options={defaultStackOptions}
        component={Welcome}
      />
      <Stack.Screen
        name="UserInfos"
        options={defaultStackOptions}
        component={UserInfos}
      />
      <Stack.Screen
        name="ConfirmSignUp"
        options={defaultStackOptions}
        component={ConfirmSignUp}
      />
      <Stack.Screen
        name="SelectAmbulance"
        options={defaultStackOptions}
        component={SelectAmbulance}
      />
    </Stack.Navigator>
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
        <SafeAreaView
          barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
          style={safeAreaViewStyle}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={theme.colors.white}
          />
          <NavigationContainer
            theme={{colors: {background: theme.colors.white}}}>
            {navigationScreens()}
          </NavigationContainer>
        </SafeAreaView>
      </ThemeProvider>
    </>
  );
};

export default Routes;
