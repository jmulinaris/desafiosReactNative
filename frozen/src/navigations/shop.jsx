import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import SettingsNavigator from './settings';
import { Categories, Products, ProductDetail } from '../screens';
import { logout } from '../store/auth/auth.slice';
import { COLORS, FONTS } from '../themes';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={({ navigation }) => ({
        headerTitleStyle: {
          fontFamily: FONTS.bold,
          fontSize: 20,
        },
        headerTintColor: COLORS.text,
        headerRight: () => (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => navigation.navigate('SettingsStack')}>
            <Ionicons name="settings-outline" size={24} color={COLORS.black} />
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity style={styles.icon} onPress={() => dispatch(logout())}>
            <Ionicons name="ios-log-out-outline" size={24} color={COLORS.black} />
          </TouchableOpacity>
        ),
      })}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={30} color={COLORS.text} />
            </TouchableOpacity>
          ),
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={30} color={COLORS.text} />
            </TouchableOpacity>
          ),
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="SettingsStack"
        component={SettingsNavigator}
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ShopNavigator;
