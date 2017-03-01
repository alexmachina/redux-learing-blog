import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import PostsContainer from './containers/admin/PostsContainer.js'
import AdminPageContainer from './containers/admin/AdminPageContainer.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk))


const rootComponent = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/admin" component={AdminPageContainer} >
        <Route path="/posts" component={PostsContainer} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  rootComponent,
  document.getElementById('root')
);