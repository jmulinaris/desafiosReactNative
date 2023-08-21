import { StyleSheet } from 'react-native';

import { COLORS } from '../../../themes/colors/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: 150,
    justifyContent: 'flex-end',
  },
  categoryName: {
    fontSize: 23,
    fontFamily: 'Poppins-Bold',
    color: COLORS.white,
    padding: 20,
  },
});
