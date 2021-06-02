import React from 'react';
import { Image, SafeAreaView, ScrollView, View, Text } from 'react-native';
import { Book } from '@interfaces/Book';
import { validateImageUrl } from '@utils/bookUtils';
import Button from '@components/Button';

import styles from './styles';

interface Props {
  book: Book;
}

function Detail({ book }: Props) {
  const { imageUrl, title, author, year, genre } = book;
  const source = validateImageUrl(imageUrl);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.subContainer}>
          <View style={styles.detailsContainer}>
            <View style={styles.details}>
              <Image
                accessibilityLabel="detailImage"
                resizeMode="stretch"
                source={source}
                style={styles.image}
              />
              <View>
                <Text numberOfLines={1} style={styles.title}>
                  {title}
                </Text>
                <Text style={styles.generalText}>{author}</Text>
                <Text style={styles.generalText}>{year}</Text>
                <Text style={styles.generalText}>{genre}</Text>
              </View>
            </View>
            <Button title="ADD TO WISHLIST" activeAnimation />
            <Button title="RENT" type="secondary" activeAnimation />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Detail;
