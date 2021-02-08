import React, { FC } from 'react';
import { ImageBackground, ImageSourcePropType, StyleSheet } from 'react-native';

type TProps = {
  image: ImageSourcePropType;
};

export const BackgroundImage: FC<TProps> = ({ children, image }) => {
  return (
    <ImageBackground style={styles.backgroundImage} source={image}>
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
