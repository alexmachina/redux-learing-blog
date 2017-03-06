import { postJson, getJson, putJson } from '../utils/fetch.js';

export function setPostProperty(property) {
  return {
    type: 'SET_POST_PROPERTY',
    property: property
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

export function clearPostsErrorMessage() {
  return {
    type: 'CLEAR_POSTS_ERROR_MESSAGE'
  }
}

export function toggleFetching() {
  return {
    type:'TOGGLE_POSTS_FETCHING'
  }
}

export function savePost(post) {
  post.date = new Date()
  return dispatch => {
    if (post._id) {
      updatePost(post, dispatch)
    } else {
      insertPost(post, dispatch)
    }

  }
}

function updatePost(post, dispatch) {
  dispatch(toggleFetching())
  dispatch(clearPostsErrorMessage())
  putJson('http://localhost:8080/post/'+post._id, post)
    .then(() => {
      dispatch(toggleFetching())
      dispatch(getPosts())
      dispatch(clearSelectedPost())
      dispatch(getPost(post._id))
      dispatch(hideModal())
    }).catch(err => {
      dispatch(setPostsErrorMessage(err))

    })
}

function insertPost(post, dispatch) {
  dispatch(toggleFetching())
  dispatch(clearPostsErrorMessage())
  postJson('http://localhost:8080/post', post)
    .then(() => {
      dispatch(toggleFetching())
      dispatch(getPosts())
      dispatch(clearSelectedPost())
      dispatch(hideModal())
    }).catch(err => {
      dispatch(setPostsErrorMessage(err))

    })

}

export function clearSelectedPost() {
  return {
    type: 'CLEAR_SELECTED_POST'
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

export function getPosts(page) {
  return dispatch => {
    getJson(`http://localhost:8080/posts?page=${page}`).then(json => {
      dispatch(setPosts(json.posts))
      dispatch(setPostsItems(Math.ceil(json.count/5)))
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

export function setPostsActivePage(activePage) {
  return {
    type: 'SET_POSTS_ACTIVE_PAGE',
    activePage
  }
}

export function setPostsItems(items) {
  return {
    type: 'SET_POSTS_ITEMS',
    items
  }
}



