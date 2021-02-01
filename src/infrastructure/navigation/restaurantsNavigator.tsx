import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RestaurantsScreen } from './../../screens/RestaurantsScreen';
import { DetailsScreen } from '../../screens/DetailsScreen';
import { TRestaurant } from '../../components/ResaurantInfo';

type RootStackParamList = {
  Restaurants: undefined;
  DetailsScreen: { restaurant: TRestaurant };
};

const Stack = createStackNavigator<RootStackParamList>();

export const RestaurantNavigator = () => {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Restaurants' component={RestaurantsScreen} />
      <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
    </Stack.Navigator>
  );
};
