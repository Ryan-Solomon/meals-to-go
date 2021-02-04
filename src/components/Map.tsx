import * as React from 'react';
import MapView from 'react-native-maps';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { useLocationContext } from '../context/location';

export const Map = () => {
  const { location, setLocation } = useLocationContext();

  return (
    <>
      {/* @ts-ignore */}
      <StyledSearchbar
        placeholder='Search'
        onChangeText={(t) => setLocation(t)}
        value={location}
        icon='map'
      />
      <StyledMap />
    </>
  );
};

const StyledMap = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const StyledSearchbar = styled(Searchbar)`
  position: absolute;
  top: 20px;
  width: 100%;
`;
