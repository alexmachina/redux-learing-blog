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
      .then(() => { dispatch(toggleFetching()) })

  }
}

export function receivePosts(posts) {
  return {
    type: 'RECEIVE_POSTS',
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
      dispatch(receivePosts(json))
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
