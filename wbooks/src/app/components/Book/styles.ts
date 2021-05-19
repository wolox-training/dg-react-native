import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 5,
    borderRadius: 5,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 1
  },
  image: {
    height: 60,
    width: 39
  },
  descriptionContainer: {
    marginLeft: 20
  },
  title: {
    fontSize: 17,
    color: COLORS.gray,
    fontWeight: '600'
  },
  author: {
    fontSize: 15,
    color: COLORS.gray
  }
});
