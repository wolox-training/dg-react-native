import { Book, BookState } from '@interfaces/Book';

import { actions } from './actions';

interface Action {
  type: string;
  payload?: string | Book[];
}

const initialState: BookState = {
  books: []
};

function bookReducer(state = initialState, action: Action): BookState {
  switch (action.type) {
    case actions.GET_BOOKS_SUCCESS:
      return { ...state, books: action.payload as Book[] };
    case actions.GET_BOOKS_FAILURE:
    default:
      return state;
  }
}

export default bookReducer;
