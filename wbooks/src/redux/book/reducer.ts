import { BOOKS_MOCK } from '@constants/mockBooks';
import { BookState } from '@interfaces/Book';

import { BOOK_ACTION_NAMES } from './actions';

const initialState: BookState = {
  books: []
};

function bookReducer(state = initialState, action: any): BookState {
  switch (action.type) {
    case BOOK_ACTION_NAMES.getBooks:
      return { ...state, books: BOOKS_MOCK };

    case BOOK_ACTION_NAMES.getBook: {
      const book = state.books.filter(obj => obj.id === action.payload)[0];
      return { ...state, book };
    }

    default:
      return state;
  }
}

export default bookReducer;
