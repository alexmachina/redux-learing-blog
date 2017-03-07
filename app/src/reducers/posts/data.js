import RichTextEditor from 'react-rte'
let initialState = {
  posts: [],
  selectedPost: {
    title: '',
    body: RichTextEditor.createEmptyValue(),
    date: new Date(),
    tags: []
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
    case 'CLEAR_SELECTED_POST':
      return Object.assign({}, state, {selectedPost: initialState.selectedPost})
    case 'RECEIVE_SELECTED_POST':
      let receivedPost = action.post
      receivedPost.body = RichTextEditor.createValueFromString(receivedPost.body, 'html')
      return Object.assign({}, state, {selectedPost: receivedPost})
    default:
      return state

  }
}
