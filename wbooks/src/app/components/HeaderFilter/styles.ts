import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

export default StyleSheet.create({
  image: {
    backgroundColor: COLORS.background,
    width: '100%',
    minHeight: 102,
    resizeMode: 'stretch',
    justifyContent: 'center'
  }
});
