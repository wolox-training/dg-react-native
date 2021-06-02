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
    padding: 20
  },
  detailsContainer: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1,
    elevation: 1
  },
  details: {
    flexDirection: 'row',
    marginBottom: 30
  },
  image: {
    width: 69,
    height: 105
  },
  title: {
    fontSize: 24,
    color: COLORS.light,
    paddingRight: 50,
    paddingLeft: 20,
    marginBottom: 5
  },
  generalText: {
    paddingLeft: 20,
    fontSize: 15,
    color: COLORS.light
  }
});
