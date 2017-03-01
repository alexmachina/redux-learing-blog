let initialState = {

    showModal: false,
    items: 0,
    activePage: 1,
    errorMessage: '',
    posts: [],
      selectedPost: {
        _id: '',
        title: '',
        body: '',
        date: ''
      }
}
export default function posts(state = initialState , action ) {
  switch(action.type) {
    case 'SET_SELECTED_POST':
      return Object.assign({}, state, {selectedPost: action.selectedPost})
    case 'SET_POST_PROPERTY':
      let post = Object.assign({}, state.selectedPost, action.property)
      return Object.assign({}, state, {selectedPost: post})
    case 'SET_POSTS':
      return Object.assign({}, state, {posts: action.posts})
    case 'RECEIVE_POSTS':
      return Object.assign({}, state, {posts: action.posts})
    case 'RECEIVE_SELECTED_POST':
      return Object.assign({}, state, {selectedPost: action.post})
    case 'SET_POSTS_ERROR_MESSAGE':
      return Object.assign({}, state, {errorMessage: action.errorMessage})

    case 'SHOW_MODAL':
      return Object.assign({}, state, {showModal: true})
    case 'HIDE_MODAL':
      return Object.assign({}, state, {showModal: false})

    case 'SET_ITEMS':
      return Object.assign({}, state, {items: action.items})
    case 'SET_ACTIVE_PAGE':
      return Object.assign({}, state, {activePage: action.activePage})
    default:
      return state

  }
}
