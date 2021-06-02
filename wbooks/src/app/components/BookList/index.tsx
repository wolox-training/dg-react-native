import React from 'react';
import { SafeAreaView, FlatList, ListRenderItem } from 'react-native';
import { Book } from '@interfaces/Book';
import BookComponent from '@components/Book';
import EmptyList from '@components/EmptyList';

import styles from './styles';

interface Props {
  books: Book[];
  showEmptyComponent?: boolean;
  query?: string;
}

function BookList({ books, query, showEmptyComponent }: Props) {
  const getKeyExtractor = (item: Book) => `${item.id}`;

  const renderItem: ListRenderItem<Book> = ({ item, index }) => (
    <BookComponent
      id={item.id}
      imageUrl={item.imageUrl}
      title={item.title}
      author={item.author}
      index={index}
    />
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
        ListEmptyComponent={showEmptyComponent ? renderEmptyComponent : null}
        contentContainerStyle={!books?.length && styles.emptyContainer}
      />
    </SafeAreaView>
  );
}

export default BookList;
