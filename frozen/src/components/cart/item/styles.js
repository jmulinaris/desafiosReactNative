import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 145,
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    padding: 10,
    marginHorizontal: 15,
    marginTop: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
  },
  imageContainer: {
    maxWidth: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  detailContainer: {
    justifyContent: 'space-between',
    maxWidth: 190,
    gap: 5,
  },
  name: {
    fontSize: 13,
    fontFamily: FONTS.bold,
  },
  price: {
    fontSize: 13,
    fontFamily: FONTS.bold,
  },
  quantity: {
    fontSize: 12,
    fontFamily: FONTS.regular,
  },
  actionContainer: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  increaseButton: {
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  increaseButtonText: {
    fontSize: 15,
    fontFamily: FONTS.bold,
  },
  decreaseButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  decreaseButtonText: {
    fontSize: 15,
    fontFamily: FONTS.bold,
  },
  deleteButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
