import { View, Text, FlatList } from 'react-native';

import styles from './styles';
import CartItem from '../../components/cart/item';
import CART from '../../constants/data/cart.json';

const Cart = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={CART}
        renderItem={({ item }) => <CartItem {...item} />}
        keyExtractor={(item) => item.id.toString()}
        style={styles.listContainer}
      />
    </View>
  );
};

export default Cart;
