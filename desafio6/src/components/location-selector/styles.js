import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    width: '100%',
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.primary,
    borderWidth: 1,
    marginVertical: 15,
  },
  text: {
    fontFamily: FONTS.regular,
    fontSize: 14,
  },
  location: {
    fontFamily: FONTS.bold,
    fontSize: 14,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: COLORS.secondary,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 40,
  },
  buttonText: {
    fontFamily: FONTS.medium,
  },
});

export default styles;
