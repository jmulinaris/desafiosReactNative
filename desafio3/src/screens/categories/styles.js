import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  categoryContainer: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  listCategory: {
    gap: 15,
  },
});

export default styles;
