import React from 'react';
import styled from 'styled-components/native';
import { BackgroundImage } from './BackgroundImage';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const img = require('../../assets/accBg.jpg');

export const Account = () => {
  const navigation = useNavigation();

  function navigate(location: 'Login' | 'Register') {
    navigation.navigate(location);
  }

  return (
    <AccountContainer>
      <BackgroundImage image={img}>
        <AccountHeader>Meals To Go</AccountHeader>
        <ButtonContainer style={{ elevation: 2 }}>
          <Button onPress={() => navigate('Login')}>
            <AntDesign
              style={{ marginRight: 15 }}
              name='unlock'
              size={24}
              color='white'
            />
            <ButtonText style={{ marginRight: 20 }}>Login</ButtonText>
          </Button>
          <Spacer />
          <Button onPress={() => navigate('Register')}>
            <ButtonText>Create Account</ButtonText>
          </Button>
        </ButtonContainer>
      </BackgroundImage>
    </AccountContainer>
  );
};

const AccountContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

const AccountHeader = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.h5};
  font-weight: bold;
`;

const ButtonContainer = styled.View`
  background: rgba(300, 300, 300, 0.65);
  padding: 20px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  box-shadow: 2px 2px 10px #000000;
`;

const Button = styled.TouchableOpacity`
  background-color: #333;
  padding: ${({ theme }) => theme.space[3]};
  flex-direction: row;
  justify-content: center;
`;

const Spacer = styled.View`
  margin-top: 7px;
  margin-bottom: 7px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.h6};
  text-align: center;
`;
