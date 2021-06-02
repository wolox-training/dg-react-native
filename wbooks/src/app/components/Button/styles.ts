import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

const ALIGN_POSITION = 'center';

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  animatedStyle: {
    borderRadius: 22,
    marginVertical: 5
  },
  buttonDefault: {
    height: 44,
    width: '100%',
    borderRadius: 22,
    justifyContent: ALIGN_POSITION,
    alignItems: ALIGN_POSITION,
    borderWidth: 1,
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
  },
  iconContainer: {
    position: 'absolute'
  },
  icon: {
    tintColor: COLORS.white
  }
});
