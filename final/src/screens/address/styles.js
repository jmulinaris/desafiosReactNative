import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  itemContainer: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    gap: 10,
  },
  mapImageContainer: {
    backgroundColor: COLORS.primary,
  },
  mapImage: {
    width: 80,
    height: 80,
  },
  itemDetailContainer: {
    flex: 1,
    gap: 10,
  },
  itemAddress: {
    fontSize: 14,
    fontFamily: FONTS.medium,
  },
  itemCoords: {
    fontFamily: FONTS.regular,
    fontSize: 13,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  floatingButtonTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButtonText: {
    fontSize: 25,
    fontFamily: FONTS.medium,
    color: COLORS.white,
  },
});

export default styles;
