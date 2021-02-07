import React, { FC } from 'react';
import { TRestaurant } from './ResaurantInfo';
import styled from 'styled-components/native';
import WebView from 'react-native-webview';
import { Platform } from 'react-native';

type TProps = {
  restaurant: TRestaurant;
};

export const MapCallout: FC<TProps> = ({ restaurant }) => {
  const { name, photos } = restaurant;
  return (
    <Container>
      <SImage source={{ uri: photos[0] }} />
      <SText>{name}</SText>
    </Container>
  );
};

const Container = styled.View`
  background-color: #333;
  width: 100px;
  height: 100px;
`;

const SImage = styled(WebView)``;

const SText = styled.Text`
  color: white;
`;
