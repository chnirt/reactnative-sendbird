import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabScreen from './BottomTabStack';

const AppStack = createStackNavigator();

export default function WelcomeStackScreen() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="BottomTab" component={BottomTabScreen} />
    </AppStack.Navigator>
  );
}
