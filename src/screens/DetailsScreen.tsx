import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { RestaurantInfo, TRestaurant } from '../components/ResaurantInfo';
import { useRestaurantData } from './../hooks/useRestaurantData';

// Eventually, pass an ID to get card
type TRouteParams = {
  params: {
    restaurant: TRestaurant;
  };
};

export const DetailsScreen = () => {
  // @ts-ignore
  const route = useRoute<TRouteParams>();
  const {
    params: { restaurant },
  } = route;

  return (
    <View>
      <RestaurantInfo restaurant={restaurant} />
    </View>
  );
};
