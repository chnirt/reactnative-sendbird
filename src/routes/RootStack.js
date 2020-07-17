import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeStackScreen from './WelcomeStack';
import AppStackScreen from './AppStack';
import AuthStackScreen from './AuthStack';

import {useAuth} from '../context/useAuth';

const AppStack = createStackNavigator();

export default function RootStack() {
  let isReadOnboarding = true;
  const {state} = useAuth();

  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!isReadOnboarding ? (
          <AppStack.Screen name="WelcomeStack" component={WelcomeStackScreen} />
        ) : state.userToken == null ? (
          <AppStack.Screen name="AuthStack" component={AuthStackScreen} />
        ) : (
          <AppStack.Screen name="AppStack" component={AppStackScreen} />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
