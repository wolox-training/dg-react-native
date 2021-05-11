import React from 'react';
import { StatusBar } from 'react-native';
import LibraryScreen from '@screens/Library';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <LibraryScreen />
    </>
  );
};

export default App;
