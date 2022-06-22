import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
const portal: HTMLElement | Element | DocumentFragment | null | any =
  document.getElementById('root');
const root: any = ReactDOM.createRoot(portal);
root.render(
  <Provider store={store}>
    {' '}
    <App />{' '}
  </Provider>
);
