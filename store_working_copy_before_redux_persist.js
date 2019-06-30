import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/reducers';     // assumes index.js
import uuidv4             from 'uuid/v4';

const nowMillis = Date.now();
const now = new Date(nowMillis);

const middleware = [thunk];

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(...middleware)
);

//console.log(JSON.stringify( store.getState() ) );

export default store;
