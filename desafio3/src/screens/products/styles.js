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
    fontFamily: 'Poppins-Regular',
  },
  products: {
    flex: 1,
  },
  productList: {
    fontFamily: 'Poppins-Regular',
  },
  notFound: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 200,
  },
  notFoundText: {
    color: 'red',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
});

export default styles;
