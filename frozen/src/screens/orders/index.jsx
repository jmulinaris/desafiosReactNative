import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';
import { OrderItem } from '../../components';
import { useGetOrdersQuery } from '../../store/orders/api';
import { COLORS } from '../../themes';

const Orders = () => {
  const { data, isLoading } = useGetOrdersQuery();
  const localId = useSelector((state) => state.auth.user.localId);

  const renderItem = ({ item }) => <OrderItem {...item} />;

  if (isLoading)
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );

  const userOrders = data.filter((order) => order.user.id === localId);

  return (
    <View style={styles.container}>
      {userOrders.length > 0 ? (
        <FlatList
          data={userOrders}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <View style={styles.noOrdersContainer}>
          <Text style={styles.noOrdersText}>You don't have orders</Text>
        </View>
      )}
    </View>
  );
};

export default Orders;
