import Login from '../components/Login.js'
import { connect } from 'react-redux'
import { fetchToken, setUserProperty } from '../actions/login.js'
import {browserHistory} from 'react-router'

let mapStateToProps = (state) => {
  return {
    user: state.login.user,
    message: state.login.message
  }
}

let mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (user) => {
      dispatch(fetchToken(user)) 
    },
    onUsernameChange: (username) =>{ dispatch(setUserProperty({username: username})) },
    onPasswordChange: (password) =>{ dispatch(setUserProperty({password: password})) },
    setUserProperty: (property) => { dispatch(setUserProperty(property)) }
  }
}

let LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps)(Login)

export default LoginContainer
