import { BOOKS_MOCK } from '@constants/mockBooks';

export const getBooks = () => Promise.resolve({ ok: true, data: BOOKS_MOCK, problem: '' });

export const getFilteredBooks = (query: string) => {
  if (!query) {
    return Promise.resolve({ ok: true, data: { books: [], query }, problem: '' });
  }

  const filteredBooks = BOOKS_MOCK.filter(book =>
    book.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );
  return Promise.resolve({ ok: true, data: { books: filteredBooks, query }, problem: '' });
};
