import { createReducer, completeReducer, completeState, onReadValue } from 'redux-recompose';
import { BookState } from '@interfaces/Book';

import { actions } from './actions';

const initialState: BookState = completeState({
  description: { books: [], filterQuery: '' }
});

const bookReducer = {
  primaryActions: [actions.GET_BOOKS],
  override: {
    [actions.SET_FILTER_QUERY]: onReadValue()
  }
};

export default createReducer(initialState, completeReducer(bookReducer));
