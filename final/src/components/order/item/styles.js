import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../../themes';

const styles = StyleSheet.create({
  orderItemContainer: {
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
    padding: 15,
    marginHorizontal: 15,
    marginTop: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
  },
  orderHeaderContainer: {
    flex: 1,
    fontFamily: FONTS.regular,
  },
  orderItemDate: {
    fontFamily: FONTS.bold,
    fontSize: 14,
  },
  orderBody: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    fontFamily: FONTS.regular,
    fontSize: 12,
  },
  orderItemTotal: {
    fontFamily: FONTS.bold,
    fontSize: 14,
  },
  orderItemId: {
    fontFamily: FONTS.regular,
    fontSize: 14,
  },
  orderItems: {
    fontFamily: FONTS.regular,
    fontSize: 14,
  },
});

export default styles;
