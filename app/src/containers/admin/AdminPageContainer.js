import AdminPage from '../../components/admin/AdminPage.js'
import { connect } from 'react-redux'

let mapStateToProps =  (state) => {
  return {
    token: state.login.token
  }
}

let AdminPageContainer = connect(
  mapStateToProps)(AdminPage)

export default AdminPageContainer
