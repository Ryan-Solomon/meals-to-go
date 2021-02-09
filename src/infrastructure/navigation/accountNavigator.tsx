import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountScreen } from '../../screens/AccountScreen';
import { LoginScreen } from '../../screens/LoginScreen';
import { RegisterScreen } from '../../screens/RegisterScreen';

type TStackParamList = {
  Main: undefined;
  Login: undefined;
  Register: undefined;
};

const Stack = createStackNavigator<TStackParamList>();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Main' component={AccountScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
    </Stack.Navigator>
  );
};
