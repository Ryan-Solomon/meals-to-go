import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { Navigation } from './src/infrastructure/navigation/appNavigator';
import { LocationContextProvider } from './src/context/location';

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) return <Text>Loading..</Text>;
  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <Container>
          <Navigation />
        </Container>
      </LocationContextProvider>
    </ThemeProvider>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;
