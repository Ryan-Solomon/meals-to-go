// Create a custom hook to use SWR to fetch resaurant data
// At first, just grab data from mock data
// Then, you can actually use SWR once ya'll get there
// Also, setup activity indicator while loading

import React, { useState } from 'react';

export const useRestaurantData = () => {
  const [restaurants, setRestaurants] = useState([]);
  return {
    data: restaurants,
    status: restaurants.length > 0 ? 'fulfilled' : 'loading',
  };
};
