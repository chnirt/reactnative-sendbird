import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <Text>ChatScreen</Text>
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
