import React, { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import star from '../../assets/star';
import open from '../../assets/open';
import nextId from 'react-id-generator';
import { useNavigation } from '@react-navigation/native';

export type TRestaurant = {
  name: string;
  icon: string;
  photos: string[];
  vicinity: string;
  opening_hours: {
    open_now: boolean;
  };
  rating: number;
};

type Props = {
  restaurant: TRestaurant;
};

export const RestaurantInfo: FC<Props> = ({
  restaurant: { name, icon, photos, vicinity, opening_hours, rating },
}) => {
  const stars = new Array(Math.floor(rating)).fill(null);
  const navigation = useNavigation();

  const navigateToDetailsScreen = () => {
    navigation.navigate('DetailsScreen');
  };

  return (
    <Container onPress={navigateToDetailsScreen} style={{ elevation: 10 }}>
      {/* @ts-ignore */}
      <Image style={styles.image} source={photos[0]} />
      <ContentContainer>
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

const Container = styled.TouchableOpacity`
  width: 100%;
  /* height: 450px; */
  padding: ${({ theme }) => theme.space[3]};
  background-color: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  margin-bottom: ${({ theme }) => theme.space[3]};
`;

const ContentContainer = styled.View`
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
