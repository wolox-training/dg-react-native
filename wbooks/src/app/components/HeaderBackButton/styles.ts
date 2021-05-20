import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginLeft: Platform.select({
      ios: 13
    })
  }
});
