import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  footerContainer: {
    backgroundColor: COLORS.background,
    borderTopColor: COLORS.secondary,
    borderTopWidth: 4,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  checkoutButton: {
    backgroundColor: COLORS.secondary,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  checkoutButtonText: {
    fontFamily: FONTS.bold,
  },
  totalContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  totalText: {
    fontFamily: FONTS.bold,
  },
  totalPriceText: {
    fontFamily: FONTS.bold,
  },
});

export default styles;
