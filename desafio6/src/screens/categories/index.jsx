import { FlatList, SafeAreaView, View } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';
import { CategoryItem } from '../../components';
import { ORIENTATION } from '../../constants/orientation';
import useOrientation from '../../hooks/useOrientation';

const Categories = ({ navigation }) => {
  const categories = useSelector((state) => state.categories.data);
  const orientation = useOrientation();

  const onSelectCategory = ({ categoryId, color, name }) => {
    navigation.navigate('Products', { categoryId, color, name });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <CategoryItem
              {...item}
              onSelectCategory={() =>
                onSelectCategory({
                  categoryId: item.id,
                  color: item.backgroundColor,
                  name: item.name,
                })
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
