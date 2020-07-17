/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {AuthProvider} from './src/context/useAuth';

import RootStack from './src/routes/RootStack';

function App() {
  useEffect(() => {
    Ionicons.loadFont();
  }, []);

  return (
    <AuthProvider>
      <RootStack />
    </AuthProvider>
  );
}

export default App;
