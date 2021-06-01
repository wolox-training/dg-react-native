import React from 'react';
import { useSelector } from 'react-redux';
import { BookState } from '@interfaces/Book';
import { RouteProp } from '@react-navigation/core';
import { LibraryStackParamList } from '@interfaces/Routes';

import Detail from './components/Detail';

type RouteProps = RouteProp<LibraryStackParamList, 'BOOK DETAIL'>;

type Props = {
  route: RouteProps;
};

function BookDetail({ route }: Props) {
  const {
    params: { bookId }
  } = route;
  const { books } = useSelector<BookState, BookState>(state => state);
  const book = books.filter(obj => obj.id === bookId)[0];

  return <Detail book={book} />;
}

export default BookDetail;
