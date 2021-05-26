import { StyleSheet, Platform, Dimensions } from 'react-native';
import { COLORS } from '@constants/colors';

const { width } = Dimensions.get('window');
const SEARCH_ICON_SIZE = 13;
const CLOSE_ICON_SIZE = 17;

export default StyleSheet.create({
  container: {
    // 58 is the width value of the back button
    width: width - 58,
    paddingLeft: 13
  },
  subContainer: {
    borderRadius: 14,
    paddingHorizontal: 9,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchIcon: {
    width: SEARCH_ICON_SIZE,
    height: SEARCH_ICON_SIZE
  },
  closeIcon: {
    width: CLOSE_ICON_SIZE,
    height: CLOSE_ICON_SIZE,
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
