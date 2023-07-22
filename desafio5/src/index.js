import { useFonts } from 'expo-font';
import { ActivityIndicator, SafeAreaView, StyleSheet, View } from 'react-native';

import RootNavigator from './navigations';
import { COLORS, FONTS } from './themes';

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
    <SafeAreaView style={styles.container}>
      <RootNavigator />
    </SafeAreaView>
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
