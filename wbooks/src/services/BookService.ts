import { BOOKS_MOCK } from '@constants/mockBooks';
import { FilteredBooks } from '@interfaces/Book';

const getBooks = () => Promise.resolve({ ok: true, data: BOOKS_MOCK, problem: '' });

const getFilteredBooks = (data: FilteredBooks) => Promise.resolve({ ok: true, data, problem: '' });

export default {
  getBooks,
  getFilteredBooks
};
