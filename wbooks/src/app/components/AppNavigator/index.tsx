import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LibraryScreen from '@screens/Library';
import BookDetailScreen from '@screens/BookDetail';
import HeaderBackground from '@app/components/HeaderBackground';
import HeaderBackButton from '@app/components/HeaderBackButton';
import { ROUTES } from '@constants/routes';

import styles from './styles';

const LibraryStack = createStackNavigator();

const App = () => {
  return (
    <LibraryStack.Navigator
      initialRouteName={ROUTES.library}
      screenOptions={{
        headerStyle: styles.header,
        headerBackground: HeaderBackground,
        headerTitleStyle: styles.headerTitle,
        headerBackImage: HeaderBackButton,
        headerBackTitleVisible: false
      }}>
      <LibraryStack.Screen name={ROUTES.library} component={LibraryScreen} />
      <LibraryStack.Screen name={ROUTES.bookDetail} component={BookDetailScreen} />
    </LibraryStack.Navigator>
  );
};

export default App;
