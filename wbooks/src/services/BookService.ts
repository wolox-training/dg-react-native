import { BOOKS_MOCK } from '@constants/mockBooks';
import { FilteredBooks } from '@interfaces/Book';

export const getBooks = () => Promise.resolve({ ok: true, data: BOOKS_MOCK, problem: '' });

export const getFilteredBooks = (data: FilteredBooks) => Promise.resolve({ ok: true, data, problem: '' });
