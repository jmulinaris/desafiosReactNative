import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import styles from './style';
import { addToCart } from '../../store/cart/cart.slice';

const ProductDetail = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { productId } = route.params;

  const products = useSelector((state) => state.products.data);

  const product = products.find((product) => product.id === productId);

  const onAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
      <View style={styles.content}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.productPrice}>{`${product.currency.code} ${product.price}`}</Text>
      </View>
      <Text style={styles.tagTitle}>Tags</Text>
      <View style={styles.containerTags}>
        {product.tags.map((tag) => (
          <View key={tag} style={styles.containerTag}>
            <Text style={styles.tag}>{tag}</Text>
          </View>
        ))}
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.addToCartButton} onPress={onAddToCart}>
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetail;
