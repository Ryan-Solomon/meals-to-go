import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { TRestaurant } from '../components/ResaurantInfo';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  async function storeFavorites(value: TRestaurant[]) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@favorites', jsonValue);
    } catch (e) {
      console.log(e.message);
    }
  }

  async function loadFavorites() {
    try {
      const value = await AsyncStorage.getItem('@favorites');
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    storeFavorites(favorites);
  }, [favorites]);

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
