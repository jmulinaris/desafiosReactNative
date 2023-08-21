import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
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
    fontFamily: FONTS.bold,
  },
});

export default styles;
