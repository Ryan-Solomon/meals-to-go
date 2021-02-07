import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { StyleSheet, Image } from 'react-native';
import styled from 'styled-components/native';
import { TRestaurant } from './ResaurantInfo';

type TProps = {
  restaurant: TRestaurant;
};

export const RestaurantCard: FC<TProps> = ({ restaurant }) => {
  const {
    name,
    icon,
    photos,
    vicinity,
    opening_hours,
    rating,
    place_id,
  } = restaurant;
  const navigation = useNavigation();

  const navigateToDetailsScreen = () => {
    navigation.navigate('DetailsScreen', {
      restaurant,
    });
  };

  return (
    <Container style={{ elevation: 10 }}>
      <ContentContainer onPress={navigateToDetailsScreen}>
        <Image style={styles.image} source={{ uri: icon }} />
        <Title>{name}</Title>
      </ContentContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    // width: '100%',
    height: 80,
    resizeMode: 'cover',
  },
  iconImage: {
    height: 25,
    width: 25,
  },
});

const Container = styled.View`
  width: 200px;
  padding: ${({ theme }) => theme.space[2]};
  background-color: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  position: relative;
  margin: ${({ theme }) => theme.space[2]};
`;

const ContentContainer = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.space[1]};
`;

const Title = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-top: ${({ theme }) => theme.space[2]};
  margin: ${({ theme }) => theme.space[2]};
`;
