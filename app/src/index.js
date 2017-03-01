import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import PostsContainer from './containers/admin/PostsContainer.js'
import PostFormContainer from './containers/admin/PostFormContainer.js'
import AdminPageContainer from './containers/admin/AdminPageContainer.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

let store = createStore(
  rootReducer,
  applyMiddleware(thunk))

const rootComponent = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/admin" component={AdminPageContainer} >
        <Route path="/posts" component={PostsContainer} />
        <Route path="/post" component={PostFormContainer} />
        <Route path="/post/:id" component={PostFormContainer} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  rootComponent,
  document.getElementById('root')
);
