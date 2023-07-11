import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  goBackText: {
    fontSize: 14,
    color: COLORS.text,
  },
  products: {
    flex: 1,
  },
  notFound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFoundText: {
    color: 'red',
    fontSize: 18,
  },
});

export default styles;
