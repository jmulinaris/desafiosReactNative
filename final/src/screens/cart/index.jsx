import { View, FlatList, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';
import CartItem from '../../components/cart/item';
import {
  clearCart,
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItemFromCart,
} from '../../store/cart/cart.slice';
import { useCreateOrderMutation } from '../../store/orders/api';
import { COLORS } from '../../themes';

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const [createOrder, { data, error, isLoading }] = useCreateOrderMutation();

  if (isLoading)
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );

  const onIncreaseCartItem = (id) => {
    dispatch(increaseItemQuantity({ id }));
  };

  const onDecreaseCartItem = (id) => {
    dispatch(decreaseItemQuantity({ id }));
  };

  const onRemoveItemFromCart = (id) => {
    dispatch(removeItemFromCart({ id }));
  };

  const onCreateOrder = async () => {
    const newOrder = {
      id: Math.floor(Math.random() * 1000),
      items: cart,
      total,
      user: {
        id: 1,
        name: 'Juli',
        address: '123 street',
        phone: '12456778',
        email: 'juli@gmail.com',
      },
      payment: {
        method: 'Visa',
      },
      delivery: {
        method: 'UPS',
        trackingNumber: Math.floor(Math.random() * 1000),
      },
      createAt: Date.now(),
      finishedAt: '',
    };
    try {
      await createOrder(newOrder);
      dispatch(clearCart());
      navigation.navigate('OrdersTab');
    } catch (e) {
      console.warn({ error, e });
    }
  };

  if (cart.length === 0) {
    return (
      <View style={styles.emptyCartContainer}>
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <CartItem
            {...item}
            onIncreaseCartItem={onIncreaseCartItem}
            onDecreaseCartItem={onDecreaseCartItem}
            onRemoveItemFromCart={onRemoveItemFromCart}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        style={styles.listContainer}
      />
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={onCreateOrder} style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPriceText}>USD {total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
