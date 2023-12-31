import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 35,
    borderWidth: 1,
    borderRadius: 10,
    color: COLORS.black,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 10,
  },
});
