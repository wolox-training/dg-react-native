import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { validateImageUrl } from '@utils/bookUtils';
import { ROUTES } from '@constants/routes';

import styles from './styles';

interface Props {
  id: number;
  imageUrl?: string | null;
  title: string;
  author: string;
  index: number;
}

const ANIMATION_DELAY = 100;
const ANIMATION_DURATION = 1000;

function Book({ imageUrl, title, author, id, index }: Props) {
  const navigation = useNavigation();
  const source = validateImageUrl(imageUrl);
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    const fadeIn = () => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: ANIMATION_DURATION,
        delay: ANIMATION_DELAY * index,
        useNativeDriver: true
      }).start();
    };

    fadeIn();
  }, [opacity, index]);

  const onNavigate = () => navigation.navigate(ROUTES.bookDetail, { bookId: id });

  return (
    <Animated.View style={{ opacity }}>
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
    </Animated.View>
  );
}

export default Book;
