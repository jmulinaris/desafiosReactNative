import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Orders } from '../screens';
import { COLORS, FONTS } from '../themes';

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerTitleStyle: {
          fontFamily: FONTS.bold,
          fontSize: 20,
        },
        headerTintColor: COLORS.text,
      }}>
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrderNavigator;
