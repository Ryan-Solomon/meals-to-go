import React, { createContext } from 'react';
import { TRestaurant } from '../components/ResaurantInfo';

type TFavoritesContext = {
  favorites: TRestaurant[];
};

const initialContext: TFavoritesContext = {
  favorites: [],
};

const FavoritesContext = createContext(initialContext);
