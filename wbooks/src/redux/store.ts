import { createStore } from 'redux';

import bookReducer from './book/reducer';

export default createStore(bookReducer);
