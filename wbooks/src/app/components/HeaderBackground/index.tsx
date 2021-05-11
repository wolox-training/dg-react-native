import React from 'react';
import { Image } from 'react-native';
import bcImage from '@assets/general/bc_nav_bar.png';

import styles from './styles';

function HeaderBackground() {
  return <Image style={styles.image} source={bcImage} />;
}

export default HeaderBackground;
