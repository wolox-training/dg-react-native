import React from 'react';
import { SafeAreaView, View, FlatList, ListRenderItem } from 'react-native';
import { Book } from '@interfaces/Book';
import { BOOKS_MOCK } from '@constants/mockBooks';

import BookComponent from './components/Book';
import styles from './styles';

function Library() {
  const getKeyExtractor = (item: Book) => `${item.id}`;

  const renderItem: ListRenderItem<Book> = ({ item }) => (
    <BookComponent id={item.id} imageUrl={item.imageUrl || ''} title={item.title} author={item.author} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={BOOKS_MOCK}
          keyExtractor={getKeyExtractor}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
}

export default Library;
