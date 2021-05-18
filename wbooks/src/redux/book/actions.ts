import { createTypes, completeTypes } from 'redux-recompose';
import { getBooks } from '@services/BookService';

export const actions = createTypes(completeTypes({ primaryActions: ['GET_BOOKS'] }), '@@BOOK');

const target = 'books';

const actionCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target,
    service: getBooks
  })
};

export default actionCreators;
