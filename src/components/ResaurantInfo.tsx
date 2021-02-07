import React, { FC, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import star from '../../assets/star';
import open from '../../assets/open';
import nextId from 'react-id-generator';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { useFavoritesContext } from '../context/favorites';

export type TRestaurant = {
  name: string;
  icon: string;
  photos: string[];
  vicinity: string;
  place_id: string;
  opening_hours: {
    open_now: boolean;
  };
  rating: number;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
};

type Props = {
  restaurant: TRestaurant;
};

export const RestaurantInfo: FC<Props> = ({ restaurant }) => {
  const [favorited, setFavorited] = useState(false);
  const { addFavorite, removeFavorite } = useFavoritesContext();
  const {
    name,
    icon,
    photos,
    vicinity,
    opening_hours,
    rating,
    place_id,
  } = restaurant;
  const stars = new Array(Math.floor(rating)).fill(null);
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
        <StarsContainer>
          <View style={{ flexDirection: 'row' }}>
            {stars.map((_) => (
              <SvgXml xml={star} key={nextId()} height={20} width={20} />
            ))}
          </View>
          <View>
            {opening_hours?.open_now ? (
              <SvgXml xml={open} height={30} width={30} />
            ) : (
              <ClosedTitle>Closed</ClosedTitle>
            )}
          </View>
          <View>
            <Image style={styles.iconImage} source={{ uri: icon }} />
          </View>
        </StarsContainer>
        <SubTitle>{vicinity}</SubTitle>
      </ContentContainer>
      <HeartWrapper
        onPress={() => {
          favorited
            ? removeFavorite(restaurant.place_id)
            : addFavorite(restaurant);
          setFavorited(!favorited);
        }}
      >
        {favorited ? (
          <AntDesign name='heart' size={30} color='red' fill='red' />
        ) : (
          <AntDesign name='hearto' size={30} color='red' fill='red' />
        )}
      </HeartWrapper>
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  iconImage: {
    height: 25,
    width: 25,
  },
});

const Container = styled.View`
  width: 100%;
  /* height: 450px; */
  padding: ${({ theme }) => theme.space[3]};
  background-color: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  margin-bottom: ${({ theme }) => theme.space[3]};
  position: relative;
`;

const ContentContainer = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.space[1]};
`;

const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-top: ${({ theme }) => theme.space[2]};
`;
const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.h6};
  font-family: ${({ theme }) => theme.fonts.body};
`;

const StarsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  padding-right: 10px;
`;

const ClosedTitle = styled(SubTitle)`
  color: red;
`;

const HeartWrapper = styled.TouchableOpacity`
  justify-content: flex-end;
  flex-direction: row;
  padding-right: 10px;
`;
