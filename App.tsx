import React from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <Container>
      <SearchBar />
      <List />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px 0px;
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
