import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';

import { CategoryItem, Header } from './components';
import CATEGORIES from './constants/data/categories.json';
import { COLORS } from './themes';

export default function App() {
  const onSelectCategory = (categoryId) => {
    console.warn({ categoryId });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title="Categories" />
        <FlatList
          data={CATEGORIES}
          renderItem={({ item }) => <CategoryItem {...item} onSelectCategory={onSelectCategory} />}
          keyExtractor={(item) => item.id}
          style={styles.categoryContainer}
          contentContainerStyle={styles.listCategory}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  categoryContainer: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  listCategory: {
    gap: 15,
  },
});
