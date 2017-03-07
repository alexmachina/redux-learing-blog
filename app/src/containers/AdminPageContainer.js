import AdminPage from '../components/AdminPage.js'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'
import {clearAuthorizationToken} from '../actions/login.js'
import { push } from 'react-router-redux'

let mapStateToProps =  (state) => {
  let token = state.login.token
  if(!token) {
    token = Cookies.get('token')
  }
  
  return {
    token
  }
}

let mapDispatchToProps = dispatch => {
  return {
    onLogoutClick: () => {
      Cookies.set('token', null)
      dispatch(clearAuthorizationToken())
      dispatch(push('/login'))
    }
  }
}

let AdminPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps)(AdminPage)

export default AdminPageContainer
