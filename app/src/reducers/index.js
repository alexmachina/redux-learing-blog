import { combineReducers } from 'redux'
import postReducer from './posts/posts.js';
import login from './login.js';

let rootReducer = combineReducers({
  postsDomain: postReducer,
  login
})

export default rootReducer
