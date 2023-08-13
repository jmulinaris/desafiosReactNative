import { View, Text, FlatList } from 'react-native';

import styles from './styles';
import { OrderItem } from '../../components';
import { useGetOrdersQuery } from '../../store/orders/api';

const Orders = () => {
  const { data, error, isLoading } = useGetOrdersQuery();

  const renderItem = ({ item }) => <OrderItem {...item} />;

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
    </View>
  );
};

export default Orders;
