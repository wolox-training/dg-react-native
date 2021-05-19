import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LibraryScreen from '@screens/Library';
import BookDetailScreen from '@screens/BookDetail';
import FilterScreen from '@screens/Filter';
import FilterInput from '@components/FilterInput';
import HeaderBackground from '@components/HeaderBackground';
import HeaderBackButton from '@components/HeaderBackButton';
import HeaderRightButton from '@components/HeaderRightButton';
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
        headerBackTitleVisible: false,
        headerRight: HeaderRightButton
      }}>
      <LibraryStack.Screen name={ROUTES.library} component={LibraryScreen} />
      <LibraryStack.Screen
        name={ROUTES.bookDetail}
        component={BookDetailScreen}
        options={{
          headerRight: () => <></>
        }}
      />
      <LibraryStack.Screen
        name={ROUTES.filter}
        component={FilterScreen}
        options={{
          headerTitle: FilterInput,
          headerRight: () => null,
          headerLeft: () => null,
          headerTitleAlign: 'center'
        }}
      />
    </LibraryStack.Navigator>
  );
}

export default AppNavigator;
