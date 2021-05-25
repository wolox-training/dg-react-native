import { createReducer, completeReducer, completeState } from 'redux-recompose';
import { BookState } from '@interfaces/Book';

import { actions } from './actions';

interface Action {
  type: string;
  target: string;
  payload: string;
}

export const initialState: BookState = completeState({
  description: { books: [], filterQuery: '' }
});

const bookReducer = {
  primaryActions: [actions.GET_BOOKS],
  override: {
    [actions.SET_FILTER_QUERY]: (state: BookState, action: Action) => ({
      ...state,
      [action.target]: action.payload
    })
  }
};

export default createReducer(initialState, completeReducer(bookReducer));
