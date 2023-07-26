import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  categoryContainer: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  listCategory: {
    gap: 15,
    paddingBottom: 20,
  },
  categoryItemLandscape: {
    height: 100,
  },
});

export default styles;
