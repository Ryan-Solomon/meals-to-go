import React from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { RestaurantsScreen } from './src/screens/RestaurantsScreen';
import { ThemeProvider } from 'styled-components/native';
import { theme, TTheme } from './src/infrastructure/theme/index';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <RestaurantsScreen />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;
