let initialState = {
  hasError: false,
  errorMessage: '',
  isFetching: false,
  posts: [],
  selectedPost: {
    title: '',
    body: '',
    date: ''
  }
}
export default function posts(state = initialState , action ) {
  switch(action.type) {
    case 'TOGGLE_FETCHING':
      return Object.assign({}, state, {isFetching: !state.isFetching})
    case 'SET_SELECTED_POST':
      return Object.assign({}, state, {selectedPost: action.selectedPost})
    case 'SET_POST_PROPERTY':
      let post = Object.assign({}, state.selectedPost, action.property)
      return Object.assign({}, state, {selectedPost: post})
    case 'SET_POSTS':
      return Object.assign({}, state, {posts: action.posts})
    case 'TOGGLE_HAS_ERROR':
      return Object.assign({}, state, {hasError: !state.hasError})
    case 'RECEIVE_POSTS':
      return Object.assign({}, state, {posts: action.posts})
    case 'RECEIVE_SELECTED_POST':
      return Object.assign({}, state, {selectedPost: action.post})
    case 'SET_POSTS_ERROR_MESSAGE':
      return Object.assign({}, state, {errorMessage: action.errorMessage})
    default:
      return state

  }
}
