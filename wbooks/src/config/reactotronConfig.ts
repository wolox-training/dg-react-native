import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

interface Tron {
  log: (...args: any[]) => void;
  clear: () => void;
  customCommand: (arg: any) => void;
  display: (arg: any) => void;
}

declare global {
  interface Console {
    tron: Tron;
  }
}

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  const scriptHostName = scriptURL?.split('://')[1].split(':')[0];

  Reactotron.configure({ name: Config.APP_NAME, host: scriptHostName }).use(reactotronRedux())
    .setAsyncStorageHandler!(AsyncStorage).connect();

  // eslint-disable-next-line no-console
  console.tron = {
    log: Reactotron.logImportant,
    clear: Reactotron.clear,
    customCommand: Reactotron.onCustomCommand,
    display: Reactotron.display
  };
}

export default Reactotron;
