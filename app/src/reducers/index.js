import { combineReducers } from 'redux'
import postReducer from './posts/posts.js';
import login from './login.js';
import {routerReducer} from 'react-router-redux';
let rootReducer = combineReducers({
  postsDomain: postReducer,
  login,
  routing: routerReducer
})

export default rootReducer
