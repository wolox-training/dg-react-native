import { createReducer, completeReducer, completeState } from 'redux-recompose';
import { BookState } from '@interfaces/Book';

import { actions } from './actions';

export const initialState: BookState = completeState({ description: { books: [] } });

const bookReducer = {
  primaryActions: [actions.GET_BOOKS]
};

export default createReducer(initialState, completeReducer(bookReducer));
