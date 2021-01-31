import React from 'react';
import { RestaurantInfo, TRestaurant } from '../components/ResaurantInfo';
import { FlatList } from 'react-native';
const img = require('../../assets/restaurant1.jpg');

const restaurant: TRestaurant = {
  name: 'A restaurant',
  icon: '',
  photos: [img],
  address: '18701 coffee ave',
  isOpenNow: true,
  rating: 10,
  isClosedTemporarily: false,
};

const restaurantArray = new Array(10).fill(restaurant);

export const RestaurantsScreen = () => {
  return (
    <>
      <FlatList
        data={restaurantArray}
        renderItem={({ item }) => <RestaurantInfo restaurant={item} />}
        keyExtractor={(item, idx) => item.name + idx}
      />
    </>
  );
};
