import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function SignUpScreen() {
  const navigation = useNavigation();

  const navigateSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Text>SignUpScreen</Text>
      <Button title="<< Sign in" onPress={navigateSignIn} />
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
