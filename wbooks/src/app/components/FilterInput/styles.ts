import { StyleSheet, Platform, Dimensions } from 'react-native';
import { COLORS } from '@constants/colors';

const { width } = Dimensions.get('window');
const searchIconSize = 13;
const closeIconSize = 17;

export default StyleSheet.create({
  container: {
    width,
    paddingHorizontal: 13
  },
  subContainer: {
    borderRadius: 14,
    paddingHorizontal: 9,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchIcon: {
    width: searchIconSize,
    height: searchIconSize
  },
  closeIcon: {
    width: closeIconSize,
    height: closeIconSize,
    tintColor: COLORS.disabled
  },
  iconEnabled: {
    tintColor: COLORS.danger
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
