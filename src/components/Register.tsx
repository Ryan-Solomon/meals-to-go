import React, { useState } from 'react';
import { BackgroundImage } from '../components/BackgroundImage';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { useAuthContext } from '../context/auth';
import { useNavigation } from '@react-navigation/native';

const img = require('../../assets/regBG.jpg');

type TLoginState = {
  email: string;
  password: string;
  confirmedPassword: string;
};

export const Register = () => {
  const navigation = useNavigation();
  const { onRegister } = useAuthContext();
  const [loginState, setLoginState] = useState<TLoginState>({
    email: '',
    password: '',
    confirmedPassword: '',
  });

  function handleLogin() {
    const { email, password, confirmedPassword } = loginState;
    onRegister(email, password, confirmedPassword);
    setLoginState({
      email: '',
      password: '',
      confirmedPassword: '',
    });
  }

  return (
    <>
      <BackgroundImage image={img}>
        <BackgroundCover>
          <Header>Register</Header>
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
            <Input
              value={loginState.confirmedPassword}
              onChangeText={(t) =>
                setLoginState({ ...loginState, confirmedPassword: t })
              }
              placeholder='Confirm Password'
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
              <ButtonText style={{ marginRight: 20 }}>Register</ButtonText>
            </Button>
            <Spacer />
            <Button onPress={() => navigation.goBack()}>
              <ButtonText>Go Back</ButtonText>
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

const Spacer = styled.View`
  margin-top: 7px;
  margin-bottom: 7px;
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
