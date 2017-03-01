import { postJson, getJson, putJson } from '../utils/fetch.js';

export function setPostProperty(property) {
  return {
    type: 'SET_POST_PROPERTY',
    property: property
  }
}

export function toggleFetching() {
  return {
    type: 'TOGGLE_FETCHING'
  }
}

export function postPost(post) {
  return dispatch => {
    dispatch(toggleFetching())
    postJson('http://localhost:8080/post', post)
      .then(() => { 
        dispatch(getPosts())
        dispatch(toggleFetching()) 
        dispatch(setPostProperty({title: '', _id:'', body: ''}))
        dispatch(hideModal())
      })

  }
}

export function setPosts(posts) {
  return {
    type: 'SET_POSTS',
    posts: posts
  }
}

export function setPostsErrorMessage(errorMessage) {
  return {
    type: 'SET_POSTS_ERROR_MESSAGE',
    errorMessage,
  }
}

export function getPosts() {
  return dispatch => {
    getJson('http://localhost:8080/posts').then(json => {
      dispatch(setPosts(json))
    }).catch(err => {
      dispatch(setPostsErrorMessage(err))
    })
  }
}

export function getPost(id) {
  return dispatch => {
    getJson('http://localhost:8080/post/'+id).then(json => {
      dispatch(receiveSelectedPost(json))
    }).catch(errorMessage => dispatch(setPostsErrorMessage(errorMessage)))
  }
}

export function putPost(post) {
  return dispatch => {
    putJson('http://localhost:8080/post/'+post._id).then(() => {
      dispatch(getPosts())
    })
  }
}
export function receiveSelectedPost(post) {
  return {
    type: 'RECEIVE_SELECTED_POST',
    post: post
  }
}

export function showModal() {
  return {
    type: 'SHOW_MODAL'
  }
}

export function hideModal() {
  return {
    type: 'HIDE_MODAL'
  }
}

export function setActivePage(activePage) {
  return {
    type: 'SET_ACTIVE_PAGE',
    activePage
  }
}

export function setItems(items) {
  type: 'SET_ITEMS',
  items
}
