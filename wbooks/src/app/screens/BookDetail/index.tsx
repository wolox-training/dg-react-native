import React from 'react';
import { useSelector } from 'react-redux';
import { BookState } from '@interfaces/Book';

import Detail from './components/Detail';

function BookDetail() {
  const { books } = useSelector<BookState, BookState>(state => state);
  return <Detail book={books[0]} />;
}

export default BookDetail;
