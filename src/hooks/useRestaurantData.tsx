// Create a custom hook to use SWR to fetch resaurant data
// At first, just grab data from mock data
// Then, you can actually use SWR once ya'll get there

import React, { useState } from 'react';

type TStatus = 'loading' | 'error' | 'fulfilled';

export const useRestaurantData = () => {
  const [restaurant, setRestaurants] = useState([]);
  const [status, setStatus] = useState<TStatus>('loading');
  return null;
};
