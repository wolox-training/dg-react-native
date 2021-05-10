import React from 'react';
import { View, Text, Image } from 'react-native';

import Styles from './styles';

interface Props {
  id: number;
  imageUrl: string;
  title: string;
  author: string;
}

function Book({ imageUrl, title, author }: Props) {
  return (
    <View style={Styles.container}>
      <Image source={{ uri: imageUrl }} style={Styles.image} />
      <View style={Styles.descriptionContainer}>
        <Text style={Styles.title}>{title}</Text>
        <Text style={Styles.author}>{author}</Text>
      </View>
    </View>
  );
}

export default Book;
