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
});

describe('Filtered book actions suit', () => {
  const store = mockStore();

  beforeEach(() => {
    store.clearActions();
  });

  it('Get filtered books failure', async () => {
    BookService.getFilteredBooks = jest.fn().mockImplementation(() => ({ ok: false, problem: '' }));
    await store.dispatch(BookActions.getFilteredBooks({ books: [], query: '' }));
    expect(store.getActions()).toEqual([
      {
        target: targets.filteredBooks,
        type: '@@BOOK/GET_FILTERED_BOOKS'
      },
      {
        target: targets.filteredBooks,
        type: '@@BOOK/GET_FILTERED_BOOKS_FAILURE',
        payload: ''
      }
    ]);
  });

  it('Get filtered books success', async () => {
    const data = { books: [], query: '' };
    BookService.getFilteredBooks = jest.fn().mockImplementation(() => ({ ok: true, data, problem: '' }));
    await store.dispatch(BookActions.getFilteredBooks(data));
    expect(store.getActions()).toEqual([
      {
        target: targets.filteredBooks,
        type: '@@BOOK/GET_FILTERED_BOOKS'
      },
      {
        target: targets.filteredBooks,
        type: '@@BOOK/GET_FILTERED_BOOKS_SUCCESS',
        payload: data
      }
    ]);
  });
});
