/* eslint-disable no-use-before-define */
import React from 'react';
import { SafeAreaView, View, StatusBar, StyleSheet } from 'react-native';
import LibraryScreen from '@screens/Library';
import appTheme from '@constants/theme';
import { BOOKS_MOCK } from '@constants/mockBooks';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={Styles.container}>
        <View style={Styles.subContainer}>
          <LibraryScreen books={BOOKS_MOCK} />
        </View>
      </SafeAreaView>
    </>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: appTheme.colors.background,
    flex: 1
  },
  subContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10
  }
});

export default App;
