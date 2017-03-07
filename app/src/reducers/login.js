export default function (state = {
  user: {
    username: '',
    password: ''
  },
  message: '',
  token: ''
}, action) {
  switch(action.type) {
    case 'SET_USER_PROPERTY':
      let user = Object.assign({}, state.user, action.property)
      return Object.assign({}, state, {user : user})
    case 'SET_TOKEN':
      return Object.assign({}, state, {token: action.token})
    case 'SET_MESSAGE':
      return Object.assign({}, state, {message: action.message})
    case 'CLEAR_AUTHORIZATION_TOKEN':
      return Object.assign({}, state, {token: null})
    default:
      return state

  }
}
