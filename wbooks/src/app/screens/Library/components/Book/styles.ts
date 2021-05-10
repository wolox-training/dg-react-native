import { StyleSheet } from 'react-native';
import appTheme from '@constants/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: appTheme.colors.white,
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    shadowColor: appTheme.colors.black,
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
    fontFamily: 'SFUIText-Bold',
    color: appTheme.colors.gray,
    fontWeight: '400'
  },
  author: {
    fontSize: 15,
    fontFamily: 'SFUIText-Light',
    color: appTheme.colors.gray,
    fontWeight: '400'
  }
});
