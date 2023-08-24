import { ActivityIndicator, FlatList, SafeAreaView, View } from 'react-native';

import styles from './styles';
import { CategoryItem } from '../../components';
import { useGetCategoriesQuery } from '../../store/categories/api';
import { COLORS } from '../../themes';

const Categories = ({ navigation }) => {
  const { data, isLoading } = useGetCategoriesQuery();

  const onSelectCategory = ({ categoryId, color, name }) => {
    navigation.navigate('Products', { categoryId, color, name });
  };

  if (isLoading)
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <CategoryItem
              {...item}
              onSelectCategory={() =>
                onSelectCategory({
                  categoryId: item.id,
                  name: item.name,
                })
              }
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
