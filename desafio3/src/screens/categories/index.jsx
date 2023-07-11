import { FlatList, SafeAreaView, View } from 'react-native';

import styles from './styles';
import { CategoryItem } from '../../components';
import CATEGORIES from '../../constants/data/categories.json';

const Categories = ({ onSelectCategory }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
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
};

export default Categories;
