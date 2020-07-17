import React from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useAuth} from '../context/useAuth';
import {useSendBird} from '../hooks/useSendBird';

export default function SignInScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('chin');
  const [password, setPassword] = React.useState('0');

  const {signIn} = useAuth();
  const {connect} = useSendBird();

  const navigateSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text>SignInScreen</Text>

      <View>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button
          title="Sign in"
          onPress={() => {
            connect(username);
            signIn({username, password});
          }}
        />
        <Button title=">> Sign up" onPress={navigateSignUp} />
      </View>
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
