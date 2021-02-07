import React, { FC } from 'react';
import { TRestaurant } from './ResaurantInfo';
import { Image } from 'react-native';
import styled from 'styled-components/native';

type TProps = {
  restaurant: TRestaurant;
};

export const MapCallout: FC<TProps> = ({ restaurant }) => {
  const { name, photos } = restaurant;
  return (
    <Container>
      {/* @ts-ignore */}
      <SImage source={photos[0]} />
      <SText>{name}</SText>
    </Container>
  );
};

const Container = styled.View`
  background-color: #333;
  width: 100px;
  height: 100px;
`;

const SImage = styled(Image)``;

const SText = styled.Text`
  color: white;
`;
