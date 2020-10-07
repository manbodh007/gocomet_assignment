import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import {Provider} from 'react-redux';

import reducer from './reducer';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';

const store = createStore(reducer,applyMiddleware(thunk))


ReactDOM.render(
  <Provider store = {store}>
     <App/>
  </Provider>,
  document.getElementById('root')
);


