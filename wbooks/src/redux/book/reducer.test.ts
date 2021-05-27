import reducer, { initialState } from './reducer';
import { ACTIONS, TARGETS } from './actions';

describe('Book reducer suit', () => {
  const action = {
    type: ACTIONS.GET_BOOKS,
    target: TARGETS.books,
    payload: []
  };

  it('Get books action', () => {
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      booksLoading: true
    });
  });
  it('Get books success action', () => {
    expect(reducer(undefined, { ...action, type: ACTIONS.GET_BOOKS_SUCCESS })).toEqual(initialState);
  });
  it('Get books failure action', () => {
    expect(reducer(undefined, { ...action, type: ACTIONS.GET_BOOKS_FAILURE, payload: null })).toEqual(
      initialState
    );
  });
  it('Set filter action', () => {
    const QUERY = 'UX';
    expect(
      reducer(undefined, { target: TARGETS.filterQuery, type: ACTIONS.SET_FILTER_QUERY, payload: QUERY })
    ).toEqual({ ...initialState, filterQuery: QUERY });
  });
});
