import React from 'react';
import { SafeAreaView, FlatList, ListRenderItem } from 'react-native';
import { useSelector } from 'react-redux';
import { FilteredBooks, BookState, Book } from '@interfaces/Book';
import BookComponent from '@components/Book';

import EmptyList from './components/EmptyList';
import styles from './styles';

function Library() {
  const { books, query } = useSelector<BookState, FilteredBooks>(state => state.filteredBooks);

  const getKeyExtractor = (item: Book) => `${item.id}`;

  const renderItem: ListRenderItem<Book> = ({ item }) => (
    <BookComponent id={item.id} imageUrl={item.imageUrl} title={item.title} author={item.author} />
  );

  const renderEmptyComponent = () => {
    const description = query ? `Sorry we can't find any book` : 'Find your favorite writers and books!';
    return <EmptyList description={description} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.subContainer}
        showsVerticalScrollIndicator={false}
        data={books}
        keyExtractor={getKeyExtractor}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyComponent}
        contentContainerStyle={books.length === 0 && styles.emptyContainer}
      />
    </SafeAreaView>
  );
}

export default Library;
