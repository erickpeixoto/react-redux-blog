import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';

import reducers from './reducers';

import '../public/styles/index.css';

const createStoreWhithMiddleware = applyMiddleware()(createStore);
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
