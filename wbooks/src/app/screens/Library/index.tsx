import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Book } from '@interfaces/Book';

import BookComponent from './components/Book';

interface Props {
  books: Book[];
}

function Library({ books }: Props) {
  const getKeyExtractor = (item: Book) => `${item.id}`;

  const renderItem: ListRenderItem<Book> = ({ item }) => (
    <BookComponent id={item.id} imageUrl={item.imageUrl || ''} title={item.title} author={item.author} />
  );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={books}
      keyExtractor={getKeyExtractor}
      renderItem={renderItem}
    />
  );
}

export default Library;
