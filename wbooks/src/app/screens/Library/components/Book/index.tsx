import React from 'react';
import { View, Text, Image } from 'react-native';
import { validateImageUrl } from '@utils/bookUtils';

import styles from './styles';

interface Props {
  id: number;
  imageUrl?: string | null;
  title: string;
  author: string;
}

function Book({ imageUrl, title, author }: Props) {
  const source = validateImageUrl(imageUrl);

  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
}

export default Book;
