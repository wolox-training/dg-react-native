import React from 'react';
import { ImageBackground } from 'react-native';
import bcImage from '@assets/general/bc_nav_bar.png';
import FilterInput from '@components/FilterInput';

import styles from './styles';

function HeaderBackground() {
  return (
    <ImageBackground style={styles.image} source={bcImage}>
      <FilterInput />
    </ImageBackground>
  );
}

export default HeaderBackground;
