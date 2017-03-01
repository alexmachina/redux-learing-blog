import {postJson} from '../utils/fetch.js'


export function setUserProperty(property) {
  return {
    type: 'SET_USER_PROPERTY',
    property: property
  }
}

export function setToken(token) {
  return {
    type: 'SET_TOKEN',
    token: token
  }
}

export function setMessage(message) {
  return {
    type: 'SET_MESSAGE',
    message
  }
}

export function fetchToken(user) {
  return dispatch => {
    postJson('http://localhost:8080/login', user)
      .then(token => {
        dispatch(setToken(token))
      }).catch(errorJson => { 
        dispatch(setMessage(errorJson))
      })
  }
}
