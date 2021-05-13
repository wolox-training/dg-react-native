import { createStore } from 'redux';
import Reactotron from '@config/reactotronConfig';

import bookReducer from './book/reducer';

export default createStore(bookReducer, Reactotron.createEnhancer());
