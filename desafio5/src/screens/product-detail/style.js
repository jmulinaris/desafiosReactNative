import { StyleSheet } from 'react-native';

import { FONTS, COLORS } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  image: {
    width: '100%',
    height: 300,
  },
  content: {
    alignItems: 'center',
    fontFamily: FONTS.regular,
    textAlign: 'center',
  },
  productName: {
    fontSize: 20,
    paddingTop: 10,
  },
  productPrice: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    marginTop: 10,
  },
  productDescription: {
    fontSize: 15,
    marginTop: 10,
  },
  button: {
    color: 'red',
  },
  tagTitle: {
    fontFamily: FONTS.regular,
    fontSize: 15,
    paddingLeft: 20,
    paddingTop: 20,
  },
  containerTag: {
    padding: 5,
    marginLeft: 10,
  },
  tag: {
    color: 'grey',
    justifyContent: 'flex-end',
  },
  containerTags: {
    flexDirection: 'row',
    gap: 5,
  },
});

export default styles;
