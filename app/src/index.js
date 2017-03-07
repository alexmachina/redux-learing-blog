import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import PostsContainer from './containers/PostsContainer.js'
import AdminPageContainer from './containers/AdminPageContainer.js'
import LoginContainer from './containers/LoginContainer.js'
import PostContainer from './containers/PostContainer.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux'

let middleware = routerMiddleware(browserHistory)
let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
  applyMiddleware(middleware))

const history = syncHistoryWithStore(browserHistory, store)
const rootComponent = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/admin" component={AdminPageContainer} >
        <Route path="/posts" component={PostsContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/post/:id" component={PostContainer} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  rootComponent,
  document.getElementById('root')
);
