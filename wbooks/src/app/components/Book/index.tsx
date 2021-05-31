import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { validateImageUrl } from '@utils/bookUtils';
import { ROUTES } from '@constants/routes';

import styles from './styles';

interface Props {
  id: number;
  imageUrl?: string | null;
  title: string;
  author: string;
}

function Book({ imageUrl, title, author }: Props) {
  const navigation = useNavigation();
  const source = validateImageUrl(imageUrl);

  const onNavigate = () => navigation.navigate(ROUTES.bookDetail);

  return (
    <TouchableOpacity accessibilityLabel="bookItem" style={styles.container} onPress={onNavigate}>
      <Image accessibilityLabel="bookImage" source={source} style={styles.image} />
      <View style={styles.descriptionContainer}>
        <Text accessibilityLabel="bookTitle" style={styles.title}>
          {title}
        </Text>
        <Text accessibilityLabel="bookAuthor" style={styles.author}>
          {author}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default Book;
