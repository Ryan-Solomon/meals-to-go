import React, { FC } from 'react';
import { Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { DefaultTheme } from './../styled.d';

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
    <Container style={styles.shadow}>
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
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});

const Container = styled.View`
  width: 100%;
  height: 400px;
  padding: ${({ theme }) => theme.theme.sizes[0]};
`;

const ContentContainer = styled.View`
  padding: ${({ theme }) => theme.theme.sizes[0]};
`;

const Title = styled.Text`
  font-size: ${({ theme }) => theme.theme.fontSizes.h3};
`;
const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.theme.fontSizes.h5};
`;
