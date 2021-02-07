import React from 'react';
import { RestaurantInfo, TRestaurant } from '../components/ResaurantInfo';
import { FlatList, Text } from 'react-native';
import { useRestaurantData } from './../hooks/useRestaurantData';
import { Searchbar } from 'react-native-paper';
import { useLocationContext } from '../context/location';
import { useFavoritesContext } from '../context/favorites';

export const RestaurantsScreen = () => {
  const { location, setLocation } = useLocationContext();
  const { data, status } = useRestaurantData();
  const { favorites } = useFavoritesContext();
  if (status === 'loading') return <Text>Loading..</Text>;
  return (
    <>
      {/* @ts-ignore */}
      <Searchbar
        placeholder='Search'
        onChangeText={(t) => setLocation(t)}
        value={location}
        icon='magnify'
      />
      {favorites.length > 0 && (
        <FlatList
          horizontal
          data={favorites}
          renderItem={({ item }) => <RestaurantInfo restaurant={item} />}
          keyExtractor={(item) => item.place_id}
        />
      )}
      <FlatList
        data={data}
        // @ts-ignore
        renderItem={({ item }) => <RestaurantInfo restaurant={item} />}
        keyExtractor={(item) => item.place_id}
      />
    </>
  );
};
