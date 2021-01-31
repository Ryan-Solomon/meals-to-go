// Create a custom hook to use SWR to fetch resaurant data
// At first, just grab data from mock data
// Then, you can actually use SWR once ya'll get there

import React, { useState } from 'react';

export const useRestaurantData = () => {
  const [restaurant, setRestaurants] = useState([]);
  return null;
};
