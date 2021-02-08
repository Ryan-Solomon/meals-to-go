import React from 'react';
import styled from 'styled-components/native';
import { BackgroundImage } from './BackgroundImage';

const img = require('../../assets/accBg.jpg');

export const Account = () => {
  return (
    <AccountContainer>
      <BackgroundImage image={img}>
        <AccountHeader>Meals To Go</AccountHeader>
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
