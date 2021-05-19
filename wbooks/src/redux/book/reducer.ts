import { createReducer, completeReducer, completeState } from 'redux-recompose';
import { BookState } from '@interfaces/Book';

import { actions } from './actions';

const initialState: BookState = completeState({
  description: { books: [], filteredBooks: { books: [], query: '' } }
});

const bookReducer = {
  primaryActions: [actions.GET_BOOKS, actions.GET_FILTERED_BOOKS]
};

export default createReducer(initialState, completeReducer(bookReducer));
