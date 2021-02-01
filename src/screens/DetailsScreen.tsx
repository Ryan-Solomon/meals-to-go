import React from 'react';
import { View, Text } from 'react-native';
import { RestaurantInfo } from '../components/ResaurantInfo';
import { useRestaurantData } from './../hooks/useRestaurantData';

// Eventually, pass an ID to get card

export const DetailsScreen = () => {
  const { data, status } = useRestaurantData();

  if (status === 'loading') return <Text>Loading...</Text>;
  return (
    <View>
      <RestaurantInfo restaurant={data[0]} />
    </View>
  );
};
