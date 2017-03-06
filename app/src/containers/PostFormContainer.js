import PostForm from '../components/PostForm.js'
import { connect } from 'react-redux'
import { setPostProperty, savePost } from '../actions/posts.js'

import RichTextEditor from 'react-rte'


let mapStateToProps = state => {
  let post = state.postsDomain.data.selectedPost
  return {
    post,
    errorMessage: state.postsDomain.ui.errorMessage
  }
}

let mapDispatchToProps = (dispatch,ownProps) => {
  return {
    onTitleChange: e => {
      dispatch(setPostProperty({title: e.target.value}))
    },
    onBodyChange: e => {
      dispatch(setPostProperty({body: e}))
    },
    onSubmit: post => {
      dispatch(savePost(post))
    }
  }
}


let PostFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostForm)

export default PostFormContainer
