import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';

const WelcomeStack = createStackNavigator();

export default function WelcomeStackScreen() {
  return (
    <WelcomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <WelcomeStack.Screen name="Welcome" component={WelcomeScreen} />
    </WelcomeStack.Navigator>
  );
}
