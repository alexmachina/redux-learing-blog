import { connect } from 'react-redux'
import PostForm from '../../components/admin/PostForm.js'
import { setPostProperty, getPost, postPost, putPost } from '../../actions/posts.js'

let mapStateToProps = (state) => {
  return {
    post: state.posts.selectedPost
  }
}

let mapDispatchToProps = dispatch => {
  return {
    setPostProperty: (property) => {
      dispatch(setPostProperty(property))
    },
    onSubmit: (post) => {
      if (post._id) {
        dispatch(putPost(post))
      } else {

        dispatch(postPost(post))
      }
    },
    loadPost: (id) => {
      dispatch(getPost(id))
    }
  }
}

let PostFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps

)(PostForm)

export default PostFormContainer
