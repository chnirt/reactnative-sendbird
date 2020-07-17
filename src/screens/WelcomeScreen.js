import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text>WelcomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
