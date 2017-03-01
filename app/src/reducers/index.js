import { combineReducers } from 'redux'
import posts from './posts.js';
import login from './login.js';

let rootReducer = combineReducers({
   posts,
  login
})

export default rootReducer
