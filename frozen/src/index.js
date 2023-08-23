import { useFonts } from 'expo-font';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import { init } from './db';
import RootNavigator from './navigations';
import { store } from './store';
import { COLORS, FONTS } from './themes';

init()
  .then(() => {})
  .catch((err) => {
    console.log('Initializing db failed');
    console.log(err);
  });

export default function App() {
  const [loaded] = useFonts({
    [FONTS.regular]: require('../assets/fonts/Poppins-Regular.ttf'),
    [FONTS.bold]: require('../assets/fonts/Poppins-Bold.ttf'),
    [FONTS.light]: require('../assets/fonts/Poppins-Light.ttf'),
    [FONTS.medium]: require('../assets/fonts/Poppins-Medium.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.primary} size="large" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: FONTS.regular,
  },
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
