import React from 'react';
import { RestaurantInfo, TRestaurant } from '../components/ResaurantInfo';
import { FlatList, Text } from 'react-native';
import { useRestaurantData } from './../hooks/useRestaurantData';

export const RestaurantsScreen = () => {
  const { data, status } = useRestaurantData();
  if (status === 'loading') return <Text>Loading..</Text>;
  return (
    <>
      <FlatList
        data={data}
        // @ts-ignore
        renderItem={({ item }) => <RestaurantInfo restaurant={item} />}
        keyExtractor={(item) => item.place_id}
      />
    </>
  );
};
