import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {primaryColor} from '../constants';

export default function IconWithBadge({name, badgeCount, color, size}) {
  const badgeSize = size - 12;
  const paddingHorizontal = 2;
  const fontSize = badgeSize - paddingHorizontal;
  return (
    <View style={{margin: 10}}>
      <Ionicons name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            position: 'absolute',
            bottom: badgeSize * 1.3,
            left: badgeSize * 1.3,
            minWidth: badgeSize,
            height: badgeSize,
            borderRadius: badgeSize / 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: primaryColor,
            paddingHorizontal,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize,
              fontWeight: 'bold',
            }}>
            {badgeCount > 99 ? '99+' : badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}
