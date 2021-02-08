import React from 'react';
import styled from 'styled-components/native';
import { BackgroundImage } from './BackgroundImage';

const img = require('../../assets/accBg.jpg');

export const Account = () => {
  return (
    <AccountContainer>
      <BackgroundImage image={img}>
        <AccountHeader>Meals To Go</AccountHeader>
        <ButtonContainer style={{ elevation: 2 }}>
          <Button>
            <ButtonText>Login</ButtonText>
          </Button>
          <Spacer />
          <Button>
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
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  box-shadow: 2px 2px 10px #000000;
`;

const Button = styled.TouchableOpacity`
  background-color: #00aeff;
  padding: ${({ theme }) => theme.space[3]};
`;

const Spacer = styled.View`
  margin-top: 7px;
  margin-bottom: 7px;
`;

const ButtonText = styled.Text`
  color: #333;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.h6};
  text-align: center;
`;
