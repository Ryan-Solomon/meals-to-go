import React from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { SearchbarComponent } from './src/components/Searchbar';
import { RestaurantsScreen } from './src/screens/RestaurantsScreen';

export default function App() {
  return (
    <Container>
      <RestaurantsScreen />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;
