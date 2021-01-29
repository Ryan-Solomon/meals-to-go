import React, { FC } from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export type TRestaurant = {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
};

type Props = {
  restaurant: TRestaurant;
};

export const RestaurantInfo: FC<Props> = ({
  restaurant: {
    name,
    icon,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemporarily,
  },
}) => {
  return (
    //   @ts-ignore
    <Card style={styles.CardContainer}>
      {/* @ts-ignore */}
      <Card.Cover source={require('../../assets/restaurant1.jpg')} />
      <Card.Content>
        <BottomCardContent>
          <Title>{name}</Title>
          <Subheading>{address}</Subheading>
        </BottomCardContent>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  CardContainer: {
    padding: 10,
  },
});

const BottomCardContent = styled.View``;

const Subheading = styled.Text``;
