import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {useAuth} from '../context/useAuth';
import {useSendBird} from '../hooks/useSendBird';

export default function SettingsScreen() {
  const {signOut} = useAuth();
  const {disconnect} = useSendBird();

  return (
    <View style={styles.container}>
      <Text>SettingsScreen</Text>
      <Button
        title="Sign out"
        onPress={() => {
          disconnect();
          signOut();
        }}
      />
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
