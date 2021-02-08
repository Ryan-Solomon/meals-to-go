import React, { FC } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const img = require('../../assets/accBg.jpg');

export const BackgroundImage: FC = ({ children }) => {
  return (
    <ImageBackground style={styles.backgroundImage} source={img}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
