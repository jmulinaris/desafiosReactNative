import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 40,
  },
  label: {
    fontSize: 14,
    fontFamily: FONTS.medium,
    paddingVertical: 5,
  },
  subLabel: {
    fontSize: 12,
    fontFamily: FONTS.regular,
    paddingVertical: 5,
  },
});

export default styles;
