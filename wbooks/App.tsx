import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import App from './src/app';
import './src/config/reactotronConfig';

export default function index() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}
