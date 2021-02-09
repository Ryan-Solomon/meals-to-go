import React from 'react';
import { View, Text } from 'react-native';
import { BackgroundImage } from '../components/BackgroundImage';
import styled from 'styled-components/native';
const img = require('../../assets/bgLogin.jpg');

export const LoginScreen = () => {
  return (
    <>
      <BackgroundImage image={img}>
        <BackgroundCover>
          <Header>Login</Header>
        </BackgroundCover>
      </BackgroundImage>
    </>
  );
};

const BackgroundCover = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const Header = styled.Text`
  color: #fff;
  font-size: ${({ theme }) => theme.fontSizes.h4};
`;
