import React from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { SearchbarComponent } from './src/components/Searchbar';

export default function App() {
  return (
    <Container>
      <SearchbarComponent />
      <List />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchBar = styled.View`
  background: teal;
  height: 10%;
  width: 100%;
`;

const List = styled.View`
  background: blue;
  height: 90%;
  width: 100%;
`;
