import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { getDatabase, ref, onValue, orderByKey, limitToFirst, query } from "firebase/database";
import app from './firebaseConfig';

const initial = {
}

function fireReducer (state = initial, action) {
  switch (action.type) {
    case 'TESTACTION':
      return state;
    default:
      return state
  }
}

export function initializeStore (initialState = initial) {
  return createStore(
    firereducer,
    initialState,
    applyMiddleware(thunkMiddleware)
  )
}
