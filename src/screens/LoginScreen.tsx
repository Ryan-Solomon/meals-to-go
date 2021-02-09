import React, { useState } from 'react';
import { BackgroundImage } from '../components/BackgroundImage';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { useAuthContext } from '../context/auth';

const img = require('../../assets/bgLogin.jpg');

type TLoginState = {
  email: string;
  password: string;
};

export const LoginScreen = () => {
  const { onLogin } = useAuthContext();
  const [loginState, setLoginState] = useState<TLoginState>({
    email: '',
    password: '',
  });

  function handleLogin() {
    const { email, password } = loginState;
    onLogin(email, password);
    setLoginState({
      email: '',
      password: '',
    });
  }

  return (
    <>
      <BackgroundImage image={img}>
        <BackgroundCover>
          <Header>Login</Header>
          <FormContainer>
            <Input
              value={loginState.email}
              onChangeText={(t) => setLoginState({ ...loginState, email: t })}
              placeholder='E-mail'
              textContentType='emailAddress'
              keyboardType='email-address'
            />
            <Input
              value={loginState.password}
              onChangeText={(t) =>
                setLoginState({ ...loginState, password: t })
              }
              placeholder='Password'
              textContentType='password'
              autoCapitalize='none'
              secureTextEntry
            />
            <Button onPress={handleLogin}>
              <AntDesign
                style={{ marginRight: 15 }}
                name='unlock'
                size={24}
                color='white'
              />
              <ButtonText style={{ marginRight: 20 }}>Login</ButtonText>
            </Button>
          </FormContainer>
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

const FormContainer = styled.View`
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  margin-top: 20px;
`;

const Input = styled.TextInput`
  height: 50px;
  width: 300px;
  font-size: ${({ theme }) => theme.fontSizes.h6};
  padding: 10px;
  margin: 10px 0px;
  background: #fff;
`;

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
