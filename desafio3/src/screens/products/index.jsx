import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import styles from './styles';
import { Input } from '../../components';
import PRODUCTS from '../../constants/data/products.json';
import { COLORS } from '../../themes';

const Products = ({ onHandleGoBack, categoryId }) => {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [borderColor, setBorderColor] = useState(COLORS.secondary);

  const onHandleBlur = () => {};

  const onHandleChangeText = (text) => {
    setSearch(text);
    filterBySearch(text);
  };

  const onHandleFocus = () => {};

  const filteredProductsByCategory = PRODUCTS.filter(
    (product) => product.categoryId === categoryId
  );

  const filterBySearch = (query) => {
    let updatedProductList = [...filteredProductsByCategory];

    updatedProductList = updatedProductList.filter((product) => {
      return product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setFilteredProducts(updatedProductList);
  };

  const clearSearch = () => {
    setSearch('');
    setFilteredProducts([]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBack} onPress={onHandleGoBack}>
        <Ionicons name="arrow-back-circle" size={40} color={COLORS.text} />
        <Text style={styles.goBackText}>Go back</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Input
          onHandleBlur={onHandleBlur}
          onHandleChangeText={onHandleChangeText}
          onHandleFocus={onHandleFocus}
          value={search}
          placeholder="Search"
          borderColor={borderColor}
        />
        {search.length > 0 && (
          <Ionicons onPress={clearSearch} name="close-circle" size={30} color={COLORS.text} />
        )}
      </View>
      <FlatList
        data={search.length > 0 ? filteredProducts : filteredProductsByCategory}
        renderItem={({ item }) => <Text style={styles.productList}>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
        style={styles.products}
      />
      {filteredProducts.length === 0 && search.length > 0 && (
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}>No products found</Text>
        </View>
      )}
    </View>
  );
};

export default Products;
