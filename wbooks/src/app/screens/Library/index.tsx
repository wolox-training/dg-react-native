import React from 'react';
import { SafeAreaView, FlatList, ListRenderItem } from 'react-native';
import { Book } from '@interfaces/Book';
import { BOOKS_MOCK } from '@constants/mockBooks';

import BookComponent from './components/Book';
import styles from './styles';

function Library() {
  const getKeyExtractor = (item: Book) => `${item.id}`;

  const renderItem: ListRenderItem<Book> = ({ item }) => (
    <BookComponent id={item.id} imageUrl={item.imageUrl} title={item.title} author={item.author} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.subContainer}
        showsVerticalScrollIndicator={false}
        data={BOOKS_MOCK}
        keyExtractor={getKeyExtractor}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

export default Library;
