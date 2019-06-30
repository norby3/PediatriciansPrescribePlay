import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/reducers';     // assumes index.js
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [thunk];

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  {},
  applyMiddleware(...middleware)
);

//console.log(`store.js persistedReducer: ${JSON.stringify(persistedReducer)}`);

const persistor = persistStore(store);

export { store, persistor };
