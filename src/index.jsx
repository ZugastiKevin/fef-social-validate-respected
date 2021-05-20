import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'reduxx/Store';
import AppRoute from 'components/AppRoute';

const App = () => (
  <Provider store={store}>
    <AppRoute />
  </Provider>
);
ReactDOM.render(<App />, document.getElementById('root'));