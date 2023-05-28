import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import "./index.css";
import App from "./App";
import { memoReducer } from "./memo/Store";

const persistConfig = {
  key: 'memo',
  storage,
  blacklist: ['message', 'mode', 'fdata'],
  whitelist: ['data']
};

const persistedReducer = persistReducer(persistConfig, memoReducer);

let store = createStore(persistedReducer);
let pstore = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<p>loading ...</p>}
      persistor={pstore}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
