import * as React from 'react';
import MapView from 'react-native-maps';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

export const Map = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <>
      {/* @ts-ignore */}
      <StyledSearchbar
        placeholder='Search'
        onChangeText={onChangeSearch}
        value={searchQuery}
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
