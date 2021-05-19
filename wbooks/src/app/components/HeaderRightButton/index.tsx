import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import icSearch from '@assets/general/ic_search.png';
import { ROUTES } from '@constants/routes';

import styles from './styles';

function HeaderRightButton() {
  const navigation = useNavigation();

  const onNavigate = () => navigation.navigate(ROUTES.filter);

  return (
    <TouchableOpacity onPress={onNavigate} style={styles.container}>
      <Image resizeMode="cover" source={icSearch} />
    </TouchableOpacity>
  );
}

export default HeaderRightButton;
