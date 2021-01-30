import React from 'react';
import { RestaurantInfo, TRestaurant } from '../components/ResaurantInfo';
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

export const RestaurantsScreen = () => {
  return (
    <>
      <RestaurantInfo restaurant={restaurant} />
    </>
  );
};
