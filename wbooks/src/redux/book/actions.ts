export const actions = {
  GET_BOOKS: '@@BOOK/GET_BOOKS'
};

const actionCreators = {
  getBooks: () => ({ type: actions.GET_BOOKS })
};

export default actionCreators;
