import { combineReducers } from 'redux'
import postReducer from './posts/posts.js';
import categoryReducer from './categories';
import login from './login.js';
import {routerReducer} from 'react-router-redux';

let rootReducer = combineReducers({
  postsDomain: postReducer,
  categoriesDomain: categoryReducer,
  login,
  routing: routerReducer
})

export default rootReducer
