import {postJson} from '../utils/fetch.js'
import Cookies from 'js-cookie'
import {push, replace} from 'react-router-redux'



export function setUserProperty(property) {
  return {
    type: 'SET_USER_PROPERTY',
    property: property
  }
}

export function setToken(token) {
  return {
    type: 'SET_TOKEN',
    token
  }
}

export function setMessage(message) {
  return {
    type: 'SET_MESSAGE',
    message
  }
}

export function clearAuthorizationToken() {
  return {
    type: 'CLEAR_AUTHORIZATION_TOKEN'
  }
}

export function fetchToken(user) {
  return dispatch => {
    //If token does not exist on Cookie,
    //Request token from the server
    //
    if(!Cookies.get('token') || Cookies.get('token') === 'undefined' || Cookies.get('token') === 'null') {
      obtainTokenFromServer(user, dispatch)

      dispatch(replace('/posts'))
    } else {
      dispatch(setToken(Cookies.get('token')))
    }

  }
}

function obtainTokenFromServer(user, dispatch) {
  postJson('http://localhost:8080/login', user)
    .then(response => {
      Cookies.set('token',response)
      dispatch(setToken(response))
    }).catch(errorJson => { 
      dispatch(setMessage(errorJson))
    })
}
