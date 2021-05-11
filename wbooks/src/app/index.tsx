import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LibraryScreen from '@screens/Library';

const LibraryStack = createStackNavigator();

const App = () => {
  return (
    <>
      <LibraryStack.Navigator initialRouteName="Library">
        <LibraryStack.Screen name="Library" component={LibraryScreen} />
      </LibraryStack.Navigator>
    </>
  );
};

export default App;
