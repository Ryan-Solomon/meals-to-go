import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountScreen } from '../../screens/AccountScreen';
import { LoginScreen } from '../../screens/LoginScreen';

type TStackParamList = {
  Main: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<TStackParamList>();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Main' component={AccountScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
    </Stack.Navigator>
  );
};
