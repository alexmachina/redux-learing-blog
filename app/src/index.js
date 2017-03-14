import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
  import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import PostsContainer from './containers/posts/PostsContainer.js'
import AdminPageContainer from './containers/AdminPageContainer.js'
import LoginContainer from './containers/LoginContainer.js'
import PostContainer from './containers/posts/PostContainer.js'
import CategoriesContainer from './containers/categories/CategoriesContainer.js'
import PublicPageContainer from './containers/PublicPageContainer.js'
import HomePageContainer from './containers/homepage/HomePageContainer.js'
import PostPublicContainer from './containers/posts/PostPublicContainer.js'
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
      <Route path="/" component={PublicPageContainer}>
        <IndexRoute component={HomePageContainer} />
        <Route path="/post/:id" component={PostPublicContainer}>
        </Route>
      </Route>
      <Route path="/admin" component={AdminPageContainer} >
        <Route path="/admin/posts" component={PostsContainer} />
        <Route path="/admin/login" component={LoginContainer} />
        <Route path="/admin/post/:id" component={PostContainer} />
        <Route path="/admin/categories" component={CategoriesContainer} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  rootComponent,
  document.getElementById('root')
);
