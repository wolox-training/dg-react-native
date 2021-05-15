import { Book, BookState } from '@interfaces/Book';

import { actions } from './actions';

interface Action {
  type: string;
  payload?: string | Book[];
}

const initialState: BookState = {
  books: [],
  loading: false,
  error: ''
};

function bookReducer(state = initialState, action: Action): BookState {
  switch (action.type) {
    case actions.GET_BOOKS:
      return { ...state, loading: true };
    case actions.GET_BOOKS_SUCCESS:
      return { ...state, books: action.payload as Book[], loading: false };
    case actions.GET_BOOKS_FAILURE:
      return { ...state, loading: false, error: action.payload as string };
    default:
      return state;
  }
}

export default bookReducer;
