import { createTypes, completeTypes } from 'redux-recompose';
import { getBooks } from '@services/BookService';

export const actions = createTypes(
  completeTypes({ primaryActions: ['GET_BOOKS'], ignoredActions: ['SET_FILTER_QUERY'] }),
  '@@BOOK'
);

const actionCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: 'books',
    service: getBooks
  }),
  setFilterQuery: (query: string) => ({
    type: actions.SET_FILTER_QUERY,
    target: 'filterQuery',
    payload: query
  })
};

export default actionCreators;
