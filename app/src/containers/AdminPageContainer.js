import AdminPage from '../components/AdminPage.js'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'

let mapStateToProps =  (state) => {
  let token = state.login.token
  if(!token) {
    token = Cookies.get('token')
  }
  
  return {
    token
  }
}

let AdminPageContainer = connect(
  mapStateToProps)(AdminPage)

export default AdminPageContainer
