import { BOOKS_MOCK } from '@constants/mockBooks';

export const getBooks = () => Promise.resolve({ ok: true, data: BOOKS_MOCK, problem: '' });

export const getFilteredBooks = (query: string) => {
  const filteredBooks = BOOKS_MOCK.filter(book =>
    book.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );
  return Promise.resolve({ ok: true, data: filteredBooks, problem: '' });
};
