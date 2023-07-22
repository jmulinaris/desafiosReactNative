import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CartNavigator from './cart';
import OrdersNavigator from './orders';
import ShopNavigator from './shop';

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTab.Navigator initalRouteName="ShopTab" screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name="ShopTab" component={ShopNavigator} />
      <BottomTab.Screen name="CartTab" component={CartNavigator} />
      <BottomTab.Screen name="OrderTab" component={OrdersNavigator} />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
