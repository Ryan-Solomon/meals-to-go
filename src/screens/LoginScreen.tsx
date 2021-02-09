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

const FormContainer = styled.View``;

const Input = styled.TextInput``;

const Button = styled.TouchableOpacity`
  background-color: #333;
  padding: ${({ theme }) => theme.space[3]};
  flex-direction: row;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.h6};
  text-align: center;
`;
