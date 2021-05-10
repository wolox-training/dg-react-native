/* eslint-disable no-use-before-define */
import React from 'react';
import { SafeAreaView, View, StatusBar, StyleSheet } from 'react-native';
import BookComponent from '@screens/Library/components/Book';
import appTheme from '@constants/theme';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={Styles.container}>
        <View style={Styles.subContainer}>
          {/* TODO: Remove this component when you have a library screen */}
          <BookComponent
            id={1}
            imageUrl="https://static.wikia.nocookie.net/tibia/images/e/e2/Biting_Book_Artwork.jpg/revision/latest?cb=20180529093825&path-prefix=en"
            title="Tibia"
            author="John Doe"
          />
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
