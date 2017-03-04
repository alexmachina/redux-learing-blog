import {connect} from 'react-redux'
import Post from '../components/post'
import {hideModal, showModal} from '../actions/posts.js'

let mapStateToProps = state => {
  return {
    post: {
      title: 'A day in life',
      body: 'lorem ipsum dot sit amet'
    }
    showModal: state.postsDomain.ui.showModal
  }

  mapDispatchToProps = dispatch => {
    return {
      closeModal: () => {
        dispatch(hideModal())
      }
      onEditClick: () => {
        dispatch(showModal())
      }
    }

  }

}
