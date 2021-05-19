import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  title: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: '600'
  },
  description: {
    marginTop: 12,
    fontSize: 15,
    color: COLORS.light
  }
});
