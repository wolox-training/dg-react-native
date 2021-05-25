import { createTypes, completeTypes } from 'redux-recompose';
import BookService from '@services/BookService';

export const actions = createTypes(
  completeTypes({ primaryActions: ['GET_BOOKS'], ignoredActions: ['SET_FILTER_QUERY'] }),
  '@@BOOK'
);

export const targets = {
  books: 'books',
  filterQuery: 'filterQuery'
};

const actionCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: targets.books,
    service: BookService.getBooks
  }),
  setFilterQuery: (query: string) => ({
    type: actions.SET_FILTER_QUERY,
    target: targets.filterQuery,
    payload: query
  })
};

export default actionCreators;
