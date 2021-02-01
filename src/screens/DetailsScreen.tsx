import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { RestaurantInfo, TRestaurant } from '../components/ResaurantInfo';
import { Accordion } from '../components/Accordion';
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
    <>
      <RestaurantInfo restaurant={restaurant} />
      <Accordion />
    </>
  );
};
