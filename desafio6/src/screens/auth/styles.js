import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  content: {
    width: '80%',
    minHeight: 360,
    maxWidth: 400,
    margin: 15,
    padding: 15,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    borderRadius: 5,
  },
  header: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 10,
  },
  linkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  link: {},
  linkText: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.primary,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: COLORS.secondary,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 40,
  },
  buttonDisabled: {
    backgroundColor: COLORS.mediumgrey,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 40,
  },
  buttonText: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
