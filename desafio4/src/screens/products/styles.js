import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: COLORS.background,
  },
  header: {
    marginTop: 30,
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
  notFound: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 200,
  },
  notFoundText: {
    color: COLORS.grey,
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
  clearIcon: {
    position: 'absolute',
    zIndex: 2,
    right: 5,
    marginTop: 6,
  },
  productContainer: {
    backgroundColor: COLORS.ligthgrey,
    borderRadius: 10,
    width: '45%',
    marginHorizontal: 10,
  },
  productContent: {
    gap: 15,
    paddingVertical: 25,
    justifyContent: 'space-between',
  },
  productImage: {
    width: '100%',
    height: 150,
  },
  productDetail: {
    padding: 10,
    gap: 5,
  },
  productName: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  productPrice: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
  },
});

export default styles;
