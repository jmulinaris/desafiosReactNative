import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
import { COLORS } from '../../../themes';

const CartItem = ({
  id,
  categoryId,
  name,
  price,
  image,
  currency,
  quantity,
  stock,
  onIncreaseCartItem,
  onDecreaseCartItem,
  onRemoveItemFromCart,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{`${currency.code} ${price}`}</Text>
        <Text style={styles.quantity}>{`qty: ${quantity} stock: ${stock}`}</Text>
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.increaseButton} onPress={() => onIncreaseCartItem(id)}>
            <Text style={styles.increaseButtonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.decreaseButton} onPress={() => onDecreaseCartItem(id)}>
            <Text style={styles.decreaseButtonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton}>
            <Ionicons
              name="trash"
              size={18}
              color={COLORS.black}
              onPress={() => onRemoveItemFromCart(id)}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
