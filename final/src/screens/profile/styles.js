import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  loading: {
    justifyContent: 'center',
    alignItem: 'center',
    paddingVertical: 20,
  },
});

export default styles;
