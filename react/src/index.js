import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import { Provider } from 'mobx-react'
import App from './App';
import store from './store'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Provider {...store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'));

serviceWorker.unregister();
