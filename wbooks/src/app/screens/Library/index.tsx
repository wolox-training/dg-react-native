import React, { useEffect } from 'react';
import { SafeAreaView, FlatList, ListRenderItem } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Book, BookState } from '@interfaces/Book';
import BookActions from '@redux/book/actions';
import BookComponent from '@components/Book';

import styles from './styles';

function Library() {
  const dispatch = useDispatch();
  const books = useSelector<BookState, Book[]>(state => state.books);

  useEffect(() => {
    dispatch(BookActions.getBooks());
  }, [dispatch]);

  const getKeyExtractor = (item: Book) => `${item.id}`;

  const renderItem: ListRenderItem<Book> = ({ item }) => (
    <BookComponent id={item.id} imageUrl={item.imageUrl} title={item.title} author={item.author} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.subContainer}
        showsVerticalScrollIndicator={false}
        data={books}
        keyExtractor={getKeyExtractor}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

export default Library;
