import React, { FC } from 'react';
import { TRestaurant } from './ResaurantInfo';
import { Text } from 'react-native';

type TProps = {
  restaurant: TRestaurant;
};

export const MapCallout: FC<TProps> = ({ restaurant }) => {
  const { name } = restaurant;
  return <Text>{name}</Text>;
};
