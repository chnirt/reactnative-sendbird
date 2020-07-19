import React, {useRef, useState} from 'react';
import {
  createBottomTabNavigator,
  TabBarComponent,
} from '@react-navigation/bottom-tabs';
import {
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import IconWithBadge from '../components/IconWithBadge';

import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import SettingsScreen from '../screens/SettingsScreen';

import {primaryColor, shadowColor} from '../constants';

const BottomTab = createBottomTabNavigator();

function MyTabBar({
  state,
  descriptors,
  navigation,
  activeTintColor,
  inactiveTintColor,
  ...rest
}) {
  const {current: translateValue} = useRef(new Animated.Value(0));
  const totalWidth = Dimensions.get('window').width;
  const tabWidth = totalWidth / 3;
  const index = state?.index - 1;

  Animated.spring(translateValue, {
    toValue: index * tabWidth,
    velocity: 10,
    useNativeDriver: true,
  }).start();

  return (
    <View
      style={[
        style.tabContainer,
        {
          flexDirection: 'row',
        },
      ]}>
      <Animated.View
        style={[
          style.slider,
          {
            transform: [{translateX: translateValue}],
          },
        ]}
      />
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        let iconName;

        if (route.name === 'Home') {
          iconName = isFocused ? 'home-sharp' : 'home-outline';
        }

        if (route.name === 'Chat') {
          iconName = isFocused
            ? 'chatbubble-ellipses-sharp'
            : 'chatbubble-ellipses-outline';
        }

        if (route.name === 'Settings') {
          iconName = isFocused ? 'settings-sharp' : 'settings-outline';
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <View style={{alignItems: 'center'}}>
              <IconWithBadge
                name={iconName}
                size={24}
                color={isFocused ? activeTintColor : inactiveTintColor}
                badgeCount={9}
              />
              <Text
                style={{
                  color: isFocused ? activeTintColor : inactiveTintColor,
                  textAlign: 'center',
                }}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function BottomTabScreen() {
  return (
    <BottomTab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      tabBarOptions={{
        activeTintColor: primaryColor,
        inactiveTintColor: shadowColor,
      }}>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Chat" component={ChatScreen} />
      <BottomTab.Screen name="Settings" component={SettingsScreen} />
    </BottomTab.Navigator>
  );
}

const style = StyleSheet.create({
  tabContainer: {
    height: 80,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  slider: {
    position: 'absolute',
    backgroundColor: primaryColor,
    height: 5,
    top: -5,
    width: 120,
    borderRadius: 10,
  },
});
