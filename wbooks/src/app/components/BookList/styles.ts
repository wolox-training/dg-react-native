import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    paddingVertical: 10
  },
  subContainer: {
    flex: 1,
    paddingHorizontal: 20
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center'
  }
});
