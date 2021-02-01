import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RestaurantsScreen } from './../../screens/RestaurantsScreen';
import { DetailsScreen } from '../../screens/DetailsScreen';

type RootStackParamList = {
  Restaurants: undefined;
  DetailsScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RestaurantNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Restaurants' component={RestaurantsScreen} />
      <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
    </Stack.Navigator>
  );
};
