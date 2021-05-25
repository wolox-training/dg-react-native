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
});

/* describe('FilteredBooks reducer suit', () => {
  const action = {
    type: actions.GET_FILTERED_BOOKS,
    target: targets.filteredBooks,
    payload: {
      books: [],
      query: ''
    }
  };

  it('Get filtered books action', () => {
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      filteredBooksLoading: true
    });
  });
  it('Get filtered books success action', () => {
    expect(reducer(undefined, { ...action, type: actions.GET_FILTERED_BOOKS_SUCCESS })).toEqual(initialState);
  });
  it('Get filtered books failure action', () => {
    expect(
      reducer(undefined, { ...action, type: actions.GET_FILTERED_BOOKS_FAILURE, payload: null })
    ).toEqual(initialState);
  });
}); */
