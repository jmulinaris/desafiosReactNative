import { View, Text, Image, Button } from 'react-native';

import styles from './style';
import PRODUCTS from '../../constants/data/products.json';

const ProductDetail = ({ navigation, route }) => {
  const { color, productId } = route.params;

  const product = PRODUCTS.find((product) => product.id === productId);

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
      <View style={styles.content}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.productPrice}>{`${product.currency.code} ${product.price}`}</Text>
        <Button title="Agregar al carrito" style={styles.button} onPress={() => null} />
      </View>
      <Text style={styles.tagTitle}>Tags</Text>
      <View style={styles.containerTags}>
        {product.tags.map((tag) => (
          <View key={tag} style={styles.containerTag}>
            <Text style={styles.tag}>{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ProductDetail;
