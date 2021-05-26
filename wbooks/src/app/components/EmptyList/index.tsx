import React from 'react';
import { View, Image, Text } from 'react-native';
import icSearchPlaceholder from '@assets/general/ic_search_placeholder.png';

import styles from './styles';

interface Props {
  description: string;
}

function EmptyList({ description }: Props) {
  return (
    <View style={styles.container}>
      <Image source={icSearchPlaceholder} />
      <Text style={styles.title}>Search in Wbooks</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

export default EmptyList;
