/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import App from './src/app';

const mockStore = configureMockStore([thunk]);

// Note: test renderer must be required after react-native.

describe('App suit test', () => {
  const store = mockStore();

  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
