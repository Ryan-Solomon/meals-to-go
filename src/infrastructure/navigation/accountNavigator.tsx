import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

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
