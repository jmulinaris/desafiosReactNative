import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const formatDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

const OrderItem = ({ id, total, createAt, items }) => {
  return (
    <TouchableOpacity onPress={() => null} style={styles.orderItemContainer}>
      <View style={styles.orderHeaderContainer}>
        <Text style={styles.orderItemDate}>{formatDate(createAt)} </Text>
      </View>
      <View style={styles.orderBody}>
        <Text style={styles.orderItemId}>ID: {id}</Text>
        <Text style={styles.orderItemTotal}>Total: $ {total} </Text>
        <Text style={styles.orderItems}>Items: {items.length}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderItem;
