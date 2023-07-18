import { FlatList, SafeAreaView, View } from 'react-native';

import styles from './styles';
import { CategoryItem } from '../../components';
import CATEGORIES from '../../constants/data/categories.json';
import { ORIENTATION } from '../../constants/orientation';
import useOrientation from '../../hooks/useOrientation';

const Categories = ({ onSelectCategory }) => {
  const orientation = useOrientation();

  console.warn(orientation);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={CATEGORIES}
          renderItem={({ item }) => (
            <CategoryItem
              {...item}
              onSelectCategory={() =>
                onSelectCategory({ categoryId: item.id, color: item.backgroundColor })
              }
              style={orientation === ORIENTATION.LANDSCAPE ? styles.categoryItemLandscape : {}}
            />
          )}
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
