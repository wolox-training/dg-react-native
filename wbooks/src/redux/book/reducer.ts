import { createReducer, completeReducer, completeState } from 'redux-recompose';
import { BookState } from '@interfaces/Book';

import { actions } from './actions';

const bookState = {
  books: []
};

const initialState: BookState = completeState({ description: bookState });

const bookReducer = {
  primaryActions: [actions.GET_BOOKS]
};

export default createReducer(initialState, completeReducer(bookReducer));
