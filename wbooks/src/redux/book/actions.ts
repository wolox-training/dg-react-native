export const BOOK_ACTION_NAMES = {
  getBooks: 'getBooks',
  getBook: 'getBook'
};

const BOOK_ACTION_CREATORS = {
  getBooks: () => ({ type: BOOK_ACTION_NAMES.getBooks }),
  getBook: (id: number) => ({ type: BOOK_ACTION_NAMES.getBook, payload: id })
};

export default BOOK_ACTION_CREATORS;
