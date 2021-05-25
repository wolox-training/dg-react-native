import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';
import { BOOKS_MOCK } from '@constants/mockBooks';
import BookService from '@services/BookService';

import BookActions, { targets } from './actions';

const mockStore = configureMockStore([thunk, fetchMiddleware]);

describe('Book actions suit', () => {
  const store = mockStore();

  beforeEach(() => {
    store.clearActions();
  });

  it('Get books failure', async () => {
    BookService.getBooks = jest.fn().mockImplementation(() => ({ ok: false, problem: '' }));
    await store.dispatch(BookActions.getBooks());
    expect(store.getActions()).toEqual([
      {
        target: targets.books,
        type: '@@BOOK/GET_BOOKS'
      },
      {
        target: targets.books,
        type: '@@BOOK/GET_BOOKS_FAILURE',
        payload: ''
      }
    ]);
  });

  it('Get books success', async () => {
    BookService.getBooks = jest.fn().mockImplementation(() => ({ ok: true, data: BOOKS_MOCK, problem: '' }));
    await store.dispatch(BookActions.getBooks());
    expect(store.getActions()).toEqual([
      {
        target: targets.books,
        type: '@@BOOK/GET_BOOKS'
      },
      {
        target: targets.books,
        type: '@@BOOK/GET_BOOKS_SUCCESS',
        payload: BOOKS_MOCK
      }
    ]);
  });

  it('Set filter query test', () => {
    store.dispatch(BookActions.setFilterQuery(''));
    expect(store.getActions()).toEqual([
      { target: targets.filterQuery, type: '@@BOOK/SET_FILTER_QUERY', payload: '' }
    ]);
  });
});
