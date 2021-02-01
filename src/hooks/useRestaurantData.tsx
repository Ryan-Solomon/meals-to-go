// Create a custom hook to use SWR to fetch resaurant data
// At first, just grab data from mock data
// Then, you can actually use SWR once ya'll get there
// Also, setup activity indicator while loading

import data from '../mock/chicago.json';

import React, { useState } from 'react';
import { TRestaurant } from '../components/ResaurantInfo';

export const useRestaurantData = () => {
  // @ts-ignore
  const [restaurants, setRestaurants] = useState<TRestaurant[]>(data.results);
  return {
    data: restaurants,
    status: restaurants.length > 0 ? 'fulfilled' : 'loading',
  };
};
