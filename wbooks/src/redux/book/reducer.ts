import { BOOKS_MOCK } from '@constants/mockBooks';
import { BookState } from '@interfaces/Book';

import { actions } from './actions';

const initialState: BookState = {
  books: []
};

function bookReducer(state = initialState, action: any): BookState {
  switch (action.type) {
    case actions.GET_BOOKS:
      return { ...state, books: BOOKS_MOCK };
    default:
      return state;
  }
}

export default bookReducer;
