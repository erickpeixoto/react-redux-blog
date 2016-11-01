import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import '../public/styles/index.css';
import routes from './routes';

const createStoreWhithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWhithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
