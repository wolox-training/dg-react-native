import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LibraryScreen from '@screens/Library';
import BookDetailScreen from '@screens/BookDetail';
import FilterScreen from '@screens/Filter';
import FilterInput from '@components/FilterInput';
import HeaderBackground from '@components/HeaderBackground';
import HeaderBackButton from '@components/HeaderBackButton';
import HeaderSearchIcon from '@app/components/HeaderSearchIcon';
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
      <LibraryStack.Screen
        name={ROUTES.library}
        component={LibraryScreen}
        options={{ headerRight: HeaderSearchIcon }}
      />
      <LibraryStack.Screen name={ROUTES.bookDetail} component={BookDetailScreen} />
      <LibraryStack.Screen
        name={ROUTES.filter}
        component={FilterScreen}
        options={{
          headerTitle: FilterInput,
          headerLeft: () => null,
          headerTitleAlign: 'center'
        }}
      />
    </LibraryStack.Navigator>
  );
}

export default AppNavigator;
