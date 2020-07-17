import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconWithBadge from '../components/IconWithBadge';

import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import SettingsScreen from '../screens/SettingsScreen';

const BottomTab = createBottomTabNavigator();

export default function BottomTabScreen() {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home-sharp';
          }

          if (route.name === 'Chat') {
            iconName = focused
              ? 'chatbubble-ellipses-outline'
              : 'chatbubble-ellipses-sharp';
          }

          if (route.name === 'Settings') {
            iconName = focused ? 'settings-outline' : 'settings-sharp';
          }

          // You can return any component that you like here!
          return (
            <IconWithBadge
              name={iconName}
              size={size}
              color={color}
              badgeCount={1}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Chat" component={ChatScreen} />
      <BottomTab.Screen name="Settings" component={SettingsScreen} />
    </BottomTab.Navigator>
  );
}
