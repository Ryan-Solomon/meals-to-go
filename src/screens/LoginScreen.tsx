import React from 'react';
import { View, Text } from 'react-native';
import { BackgroundImage } from '../components/BackgroundImage';
const img = require('../../assets/bgLogin.jpg');

export const LoginScreen = () => {
  return (
    <>
      <BackgroundImage image={img}>
        <Text>Login</Text>
      </BackgroundImage>
    </>
  );
};
