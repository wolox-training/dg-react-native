import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Book, BookState } from '@interfaces/Book';
import BookActions from '@redux/book/actions';
import BookList from '@components/BookList';

function Library() {
  const dispatch = useDispatch();
  const books = useSelector<BookState, Book[]>(state => state.books);

  useEffect(() => {
    dispatch(BookActions.getBooks());
  }, [dispatch]);

  return <BookList books={books} />;
}

export default Library;
