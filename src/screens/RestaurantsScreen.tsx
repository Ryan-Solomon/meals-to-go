import React from 'react';
import { RestaurantInfo } from '../components/ResaurantInfo';
import { FlatList, Text } from 'react-native';
import { useRestaurantData } from './../hooks/useRestaurantData';
import { Searchbar } from 'react-native-paper';
import { useLocationContext } from '../context/location';
import { useFavoritesContext } from '../context/favorites';
import { RestaurantCard } from './../components/RestaurantCard';
import styled from 'styled-components/native';

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
        <FavoritesContainer>
          <FavoritesTitle>Favorites</FavoritesTitle>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={favorites}
            renderItem={({ item }) => <RestaurantCard restaurant={item} />}
            keyExtractor={(item) => item.place_id}
          />
        </FavoritesContainer>
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

const FavoritesContainer = styled.View`
  padding: ${({ theme }) => theme.space[2]};
`;

const FavoritesTitle = styled.Text`
  font-size: ${({ theme }) => theme.sizes[1]};
  padding-left: ${({ theme }) => theme.space[2]};
`;
