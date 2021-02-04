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
      <StyledMap>
        {data.map((restaurant) => {
          return null;
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
