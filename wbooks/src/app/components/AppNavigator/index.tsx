import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LibraryScreen from '@screens/Library';
import BookDetailScreen from '@screens/BookDetail';
import HeaderBackground from '@components/HeaderBackground';
import HeaderBackButton from '@components/HeaderBackButton';
import { ROUTES } from '@constants/routes';

import styles from './styles';

const LibraryStack = createStackNavigator();

function AppNavigator() {
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
}

export default AppNavigator;
