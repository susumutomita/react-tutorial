import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import app from './firebaseConfig';

const initial = {
  login: false,
  username: '(click here!)',
  email: '',
  data: [],
  items: [],
}

function fireReducer(state = initial, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      return action.value;
    default:
      return state
  }
}

export function initStore(initialState = initial) {
  return createStore(
    fireReducer,
    initialState,
    applyMiddleware(thunkMiddleware)
  )
}
