import { createTypes, completeTypes } from 'redux-recompose';
import BookService from '@services/BookService';
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
    target: targets.books,
    service: BookService.getBooks
  }),
  getFilteredBooks: (data: FilteredBooks) => ({
    type: actions.GET_FILTERED_BOOKS,
    target: targets.filteredBooks,
    service: BookService.getFilteredBooks,
    payload: data
  })
};

export default actionCreators;
