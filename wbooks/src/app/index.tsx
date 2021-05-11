import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LibraryScreen from '@screens/Library';
import BookDetailScreen from '@screens/BookDetail';
import { ROUTES } from '@constants/routes';

const LibraryStack = createStackNavigator();

const App = () => {
  return (
    <LibraryStack.Navigator initialRouteName={ROUTES.library}>
      <LibraryStack.Screen name={ROUTES.library} component={LibraryScreen} />
      <LibraryStack.Screen name={ROUTES.bookDetail} component={BookDetailScreen} />
    </LibraryStack.Navigator>
  );
};

export default App;
