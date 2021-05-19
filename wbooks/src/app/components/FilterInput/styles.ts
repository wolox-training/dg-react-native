import { StyleSheet, Platform, Dimensions } from 'react-native';
import { COLORS } from '@constants/colors';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width,
    paddingHorizontal: 12.5
  },
  subContainer: {
    borderRadius: 14,
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
