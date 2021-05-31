import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BookState } from '@interfaces/Book';
import BookList from '@components/BookList';

function Filter() {
  const { books, filterQuery } = useSelector<BookState, BookState>(state => state);
  const filteredBooks = useMemo(() => {
    if (filterQuery) {
      return books.filter(book => book.title.toLowerCase().includes(filterQuery.toLowerCase()));
    }
    return [];
  }, [books, filterQuery]);

  return <BookList books={filteredBooks} query={filterQuery} showEmptyComponent />;
}

export default Filter;
