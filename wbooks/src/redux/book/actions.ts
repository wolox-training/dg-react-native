import { createTypes, completeTypes } from 'redux-recompose';
import { getBooks, getFilteredBooks } from '@services/BookService';
import { FilteredBooks } from '@interfaces/Book';

export const actions = createTypes(
  completeTypes({ primaryActions: ['GET_BOOKS', 'GET_FILTERED_BOOKS'] }),
  '@@BOOK'
);

export const targets = {
  books: 'books',
  filteredBooks: 'filteredBooks'
};

const actionCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: 'books',
    service: getBooks
  }),
  getFilteredBooks: (data: FilteredBooks) => ({
    type: actions.GET_FILTERED_BOOKS,
    target: 'filteredBooks',
    service: getFilteredBooks,
    payload: data
  })
};

export default actionCreators;
