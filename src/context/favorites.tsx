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

  function addFavorite(restaurant: TRestaurant) {
    setFavorites((r) => [...r, restaurant]);
  }

  function removeFavorite(id: string) {
    setFavorites((r) => r.filter((rest) => rest.place_id !== id));
  }

  function clearFavorites() {
    setFavorites([]);
  }

  const value = {
    favorites,
    addFavorite,
    removeFavorite,
    clearFavorites,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => {
  return useContext(FavoritesContext);
};
