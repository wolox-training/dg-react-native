import { Dispatch } from 'redux';
import { BOOKS_MOCK } from '@constants/mockBooks';

export const actions = {
  GET_BOOKS: '@@BOOK/GET_BOOKS',
  GET_BOOKS_SUCCESS: '@@BOOK/GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: '@@BOOK/GET_BOOKS_FAILURE'
};

const actionCreators = {
  getBooks: () => (dispatch: Dispatch) => {
    dispatch({ type: actions.GET_BOOKS });
    const response = { ok: true, data: BOOKS_MOCK, problem: '' };
    if (response.ok) {
      dispatch({ type: actions.GET_BOOKS_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: actions.GET_BOOKS_FAILURE, payload: response.problem });
    }
  }
};

export default actionCreators;
