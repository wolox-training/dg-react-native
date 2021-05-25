import reducer, { initialState } from './reducer';
import { actions, targets } from './actions';

describe('Book reducer suit', () => {
  const action = {
    type: actions.GET_BOOKS,
    target: targets.books,
    payload: []
  };

  it('Get books action', () => {
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      booksLoading: true
    });
  });
  it('Get books success action', () => {
    expect(reducer(undefined, { ...action, type: actions.GET_BOOKS_SUCCESS })).toEqual(initialState);
  });
  it('Get books failure action', () => {
    expect(reducer(undefined, { ...action, type: actions.GET_BOOKS_FAILURE, payload: null })).toEqual(
      initialState
    );
  });
  it('Set filter action', () => {
    const QUERY = 'UX';
    expect(
      reducer(undefined, { target: targets.filterQuery, type: actions.SET_FILTER_QUERY, payload: QUERY })
    ).toEqual({ ...initialState, filterQuery: QUERY });
  });
});
