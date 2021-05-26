import React from 'react';
import { useSelector } from 'react-redux';
import { FilteredBooks, BookState } from '@interfaces/Book';
import BookList from '@components/BookList';

function Filter() {
  const { books, query } = useSelector<BookState, FilteredBooks>(state => state.filteredBooks);

  return <BookList books={books} query={query} showEmptyComponent />;
}

export default Filter;
