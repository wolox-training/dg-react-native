import { createStore, compose, applyMiddleware, combineReducers as CR } from 'redux';
import thunk from 'redux-thunk';
import { wrapCombineReducers } from 'redux-recompose';
import Reactotron from '@config/reactotronConfig';
import { BookState } from '@interfaces/Book';

import bookReducer from './book/reducer';

export interface AppState {
  book: BookState;
}

const combineReducers = wrapCombineReducers(CR);
const rootReducer = combineReducers({ book: bookReducer });

export default createStore(
  rootReducer,
  compose(applyMiddleware(thunk), __DEV__ && Reactotron.createEnhancer())
);
