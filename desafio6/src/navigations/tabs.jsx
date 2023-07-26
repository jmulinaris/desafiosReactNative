import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import CartNavigator from './cart';
import OrdersNavigator from './orders';
import ShopNavigator from './shop';
import { COLORS, FONTS } from '../themes';

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  const cartItems = useSelector((state) => state.cart.items).length;

  return (
    <BottomTab.Navigator
      initalRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: FONTS.regular,
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: COLORS.white,
        },
        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: COLORS.mediumgrey,
      }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={20} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'} size={20} color={color} />
          ),
          tabBarBadge: cartItems,
          tabBarBadgeStyle: {
            backgroundColor: COLORS.black,
            color: COLORS.white,
            fontFamily: FONTS.regular,
            fontSize: 11,
          },
        }}
      />
      <BottomTab.Screen
        name="OrderTab"
        component={OrdersNavigator}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'file-tray' : 'file-tray-outline'} size={20} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
