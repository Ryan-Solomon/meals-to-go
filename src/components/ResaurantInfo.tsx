import React, { FC } from 'react';
import { Image, StyleSheet } from 'react-native';
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
    <Container style={{ elevation: 10 }}>
      {/* @ts-ignore */}
      <Image style={styles.image} source={photos[0]} />
      <ContentContainer>
        <Title>{name}</Title>
        <SubTitle>{address}</SubTitle>
      </ContentContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
  },
});

const Container = styled.View`
  width: 100%;
  height: 400px;
  padding: ${({ theme }) => theme.space[3]};
  background-color: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
`;

const ContentContainer = styled.View`
  padding: ${({ theme }) => theme.space[2]};
`;

const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.h4};
`;
const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.h6};
`;
