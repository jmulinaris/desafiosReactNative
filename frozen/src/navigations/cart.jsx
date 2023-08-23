import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Cart } from '../screens';
import { COLORS, FONTS } from '../themes';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerTitleStyle: {
          fontFamily: FONTS.bold,
          fontSize: 20,
        },
        headerTintColor: COLORS.text,
      }}>
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
