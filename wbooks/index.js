/**
 * @format
 */

import { AppRegistry } from 'react-native';

import App from './App';
import { name as appName } from './app.json';

if (__DEV__) {
  import('./src/config/reactotronConfig');
}

AppRegistry.registerComponent(appName, () => App);
