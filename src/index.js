// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import BookstoreApp from './components/BookstoreApp';

ReactDOM.render(
  <Provider store={store}>
    <BookstoreApp />
  </Provider>,
  document.getElementById('root')
);
