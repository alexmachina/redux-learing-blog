let initialState = {
  errorMessage: '',
  showModal: false,
  fetching: false,
  items: 0,
  activePage: 1,
  onSelect: () => {},
  isPostTitleValid: true,
  isPostBodyValid: true
}

export default function ui(state = initialState, action) {
  switch(action.type) {
    case 'SET_POSTS_ERROR_MESSAGE':
      return Object.assign({}, state, {errorMessage:action.errorMessage})
    case 'SHOW_MODAL':
      return Object.assign({}, state, {showModal: true})
    case 'HIDE_MODAL':
      return Object.assign({}, state, {showModal: false})
    case 'CLEAR_POSTS_ERROR_MESSAGE':
      return Object.assign({}, state, {errorMessage: ''})
    case 'TOGGLE_POSTS_FETCHING':
      return Object.assign({}, state, {fetching: !state.fetching})
    case 'SET_POSTS_ACTIVE_PAGE':
      return Object.assign({}, state, {activePage: action.activePage})
    case 'SET_POSTS_ITEMS':
      return Object.assign({}, state, {items: action.items})
    case 'SET_POST_TITLE_AS_VALID':
      return Object.assign({}, state, {isPostTitleValid: true})
    case 'SET_POST_TITLE_AS_INVALID':
      return Object.assign({}, state, {isPostTitleValid: false})
    case 'SET_POST_BODY_AS_VALID':
      return Object.assign({}, state, {isPostBodyValid: true})
    case 'SET_POST_BODY_AS_INVALID':
      return Object.assign({}, state, {isPostBodyValid: false})
    default:
      return state
  }
}
