import { createTypes, completeTypes } from 'redux-recompose';
import { getBooks, getFilteredBooks } from '@services/BookService';

export const actions = createTypes(
  completeTypes({ primaryActions: ['GET_BOOKS', 'GET_FILTERED_BOOKS'] }),
  '@@BOOK'
);

const actionCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: 'books',
    service: getBooks
  }),
  getFilteredBooks: (query: string) => ({
    type: actions.GET_FILTERED_BOOKS,
    target: 'filteredBooks',
    service: getFilteredBooks,
    payload: query
  })
};

export default actionCreators;
