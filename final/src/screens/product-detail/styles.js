import { StyleSheet } from 'react-native';

import { FONTS, COLORS } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  image: {
    marginTop: 15,
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
    paddingHorizontal: 15,
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
    marginLeft: 15,
  },
  tag: {
    color: 'grey',
    justifyContent: 'flex-end',
  },
  containerTags: {
    flexDirection: 'row',
    gap: 5,
  },
  containerButton: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  addToCartButton: {
    width: '100%',
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    fontFamily: FONTS.medium,
    fontSize: 16,
  },
});

export default styles;
