import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { Address, CreateAddress, Profile, Settings } from '../screens';
import { COLORS, FONTS } from '../themes';

const Stack = createNativeStackNavigator();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={({ navigation }) => ({
        headerTitleStyle: {
          fontFamily: FONTS.bold,
          fontSize: 20,
        },
        headerTintColor: COLORS.text,
        headerLeft: () => (
          <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} color={COLORS.text} />
          </TouchableOpacity>
        ),
      })}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="CreateAddress"
        component={CreateAddress}
        options={{
          headerTitle: 'Create Address',
        }}
      />
      <Stack.Screen name="Address" component={Address} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SettingsNavigator;
