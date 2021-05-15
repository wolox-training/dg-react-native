import React from 'react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';

import App from './src/app';
import store from './src/redux/store';
import './src/config/reactotronConfig';

export default function index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
