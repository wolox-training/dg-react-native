import React from 'react';
import { Image } from 'react-native';
import icBack from '@assets/general/ic_back.png';

import styles from './styles';

function HeaderBackButton() {
  return <Image resizeMode="cover" style={styles.container} source={icBack} />;
}

export default HeaderBackButton;
