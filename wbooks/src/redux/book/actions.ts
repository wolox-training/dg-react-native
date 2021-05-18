import { Dispatch } from 'redux';
import { createTypes, completeTypes } from 'redux-recompose';
import { getBooks } from '@services/BookService';

export const actions = createTypes(completeTypes({ primaryActions: ['GET_BOOKS'] }), '@@BOOK');

const target = 'books';

const actionCreators = {
  getBooks: () => async (dispatch: Dispatch) => {
    dispatch({ type: actions.GET_BOOKS, target });
    const response = await getBooks();
    if (response.ok) {
      dispatch({ type: actions.GET_BOOKS_SUCCESS, payload: response.data, target });
    } else {
      dispatch({ type: actions.GET_BOOKS_FAILURE, payload: response.problem, target });
    }
  }
};

export default actionCreators;
