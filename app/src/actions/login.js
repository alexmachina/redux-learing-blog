import {postJson} from '../utils/fetch.js'
import Cookies from 'js-cookie'



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

export function fetchToken(user) {
  return dispatch => {
    //If token does not exist on Cookie,
    //Request token from the server
    if(!Cookies.get('token') || Cookies.get('token') === 'undefined') {
      obtainTokenFromServer(user, dispatch)
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
