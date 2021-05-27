import { createTypes, completeTypes } from 'redux-recompose';
import BookService from '@services/BookService';

export const ACTIONS = createTypes(
  completeTypes({ primaryActions: ['GET_BOOKS'], ignoredActions: ['SET_FILTER_QUERY'] }),
  '@@BOOK'
);

export const TARGETS = {
  books: 'books',
  filterQuery: 'filterQuery'
};

const actionCreators = {
  getBooks: () => ({
    type: ACTIONS.GET_BOOKS,
    target: TARGETS.books,
    service: BookService.getBooks
  }),
  setFilterQuery: (query: string) => ({
    type: ACTIONS.SET_FILTER_QUERY,
    target: TARGETS.filterQuery,
    payload: query
  })
};

export default actionCreators;
