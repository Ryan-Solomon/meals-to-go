import * as React from 'react';
import MapView from 'react-native-maps';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { useLocationContext } from '../context/location';
import { useRestaurantData } from '../hooks/useRestaurantData';
import { Text } from 'react-native';
import { useEffect, useState } from 'react';

export const Map = () => {
  const { location, setLocation } = useLocationContext();
  const { data, status } = useRestaurantData();
  const [latDelta, setLatDelta] = useState(0);
  const lat = 41.886065;
  const lng = -87.6208832;

  useEffect(() => {
    const northeastLat = 41.88758823029149;
    const southwestLat = 41.88489026970849;
    const latDelta = northeastLat - southwestLat;
    setLatDelta(latDelta);
  }, [location]);

  if (status === 'loading') return <Text>Loading..</Text>;

  return (
    <>
      {/* @ts-ignore */}
      <StyledSearchbar
        placeholder='Search'
        onChangeText={(t) => setLocation(t)}
        value={location}
        icon='map'
      />
      <StyledMap
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {data.map((restaurant) => {
          return (
            // @ts-ignore
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            />
          );
        })}
      </StyledMap>
    </>
  );
};

const StyledMap = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const StyledSearchbar = styled(Searchbar)``;
