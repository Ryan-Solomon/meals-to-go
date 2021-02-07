import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from 'react';
import { TRestaurant } from '../components/ResaurantInfo';

type TFavoritesContext = {
  favorites: TRestaurant[];
  addFavorite: (restaurant: TRestaurant) => void;
  removeFavorite: (id: string) => void;
  clearFavorites: () => void;
};

const initialContext: TFavoritesContext = {
  favorites: [],
  addFavorite: (restaurant: TRestaurant) => null,
  removeFavorite: (id: string) => null,
  clearFavorites: () => null,
};

const FavoritesContext = createContext(initialContext);

export const FavoritesProvider: FC<ReactNode> = ({ children }) => {
  const [favorites, setFavorites] = useState<TRestaurant[]>([]);

  const value = {};
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => {
  return useContext(FavoritesContext);
};
