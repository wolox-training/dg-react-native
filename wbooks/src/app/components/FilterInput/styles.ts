import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '@constants/colors';

export default StyleSheet.create({
  container: {
    borderRadius: 14,
    marginHorizontal: 12.5,
    paddingHorizontal: 9,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 13,
    height: 13
  },
  input: {
    paddingHorizontal: 13,
    flex: 1,
    height: 28,
    paddingVertical: Platform.select({
      android: 4
    })
  }
});
