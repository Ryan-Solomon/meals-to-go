import React from 'react';
import styled from 'styled-components/native';
import { BackgroundImage } from './BackgroundImage';

export const Account = () => {
  return (
    <AccountContainer>
      <BackgroundImage>
        <AccountHeader>Meals To Go</AccountHeader>
      </BackgroundImage>
    </AccountContainer>
  );
};

const AccountContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

const AccountHeader = styled.Text``;
