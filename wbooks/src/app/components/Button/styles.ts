import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

const ALIGN_POSITION = 'center';

export default StyleSheet.create({
  buttonDefault: {
    height: 44,
    width: '100%',
    borderRadius: 22,
    justifyContent: ALIGN_POSITION,
    alignItems: ALIGN_POSITION,
    borderWidth: 1
  },
  buttonPrimary: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.secondary
  },
  buttonSecondary: {
    backgroundColor: COLORS.secondary,
    borderColor: COLORS.secondary
  },
  titleDefault: {
    fontSize: 15
  },
  titlePrimary: {
    color: COLORS.secondary
  },
  titleSecondary: {
    color: COLORS.white
  }
});
