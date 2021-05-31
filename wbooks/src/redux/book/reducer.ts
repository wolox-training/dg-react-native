import { createReducer, completeReducer, completeState, onReadValue } from 'redux-recompose';
import { BookState } from '@interfaces/Book';

import { ACTIONS } from './actions';

export const initialState: BookState = completeState({
  description: { books: [], filterQuery: '' }
});

const bookReducer = {
  primaryActions: [ACTIONS.GET_BOOKS],
  override: {
    [ACTIONS.SET_FILTER_QUERY]: onReadValue()
  }
};

export default createReducer(initialState, completeReducer(bookReducer));
