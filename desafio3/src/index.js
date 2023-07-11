import { useFonts } from 'expo-font';
import { useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, View } from 'react-native';

import { Header } from './components';
import { Categories, Products } from './screens';
import { COLORS, FONTS } from './themes';

export default function App() {
  const [loaded] = useFonts({
    [FONTS.regular]: require('../assets/fonts/Poppins-Regular.ttf'),
    [FONTS.bold]: require('../assets/fonts/Poppins-Bold.ttf'),
    [FONTS.light]: require('../assets/fonts/Poppins-Light.ttf'),
    [FONTS.medium]: require('../assets/fonts/Poppins-Medium.ttf'),
  });

  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const headerTitle = isCategorySelected ? 'Products' : 'Categories';

  const onHandleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    setIsCategorySelected(!isCategorySelected);
  };
  const onHandleNavigate = () => {
    setIsCategorySelected(!isCategorySelected);
    setSelectedCategory(null);
  };

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.primary} size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title={headerTitle} />
        {isCategorySelected ? (
          <Products onHandleGoBack={onHandleNavigate} categoryId={selectedCategory} />
        ) : (
          <Categories onSelectCategory={onHandleSelectCategory} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    fontFamily: 'Poppins-Regular',
  },
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
