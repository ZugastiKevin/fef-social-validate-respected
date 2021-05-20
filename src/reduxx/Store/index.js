import { createStore, compose, applyMiddleware } from 'redux';
import Reducer from 'reduxx/Reducer';
import thunkMiddleware from "redux-thunk";

export const store = createStore(
  Reducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
