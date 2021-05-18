import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';
import Reactotron from '@config/reactotronConfig';

import bookReducer from './book/reducer';

export default createStore(
  bookReducer,
  compose(applyMiddleware(thunk, fetchMiddleware), __DEV__ && Reactotron.createEnhancer())
);
