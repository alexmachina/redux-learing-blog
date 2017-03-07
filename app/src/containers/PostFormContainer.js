import PostForm from '../components/PostForm.js'
import { connect } from 'react-redux'
import { setPostProperty, savePost, validatePostTitle, validatePostBody } from '../actions/posts.js'

import RichTextEditor from 'react-rte'


let mapStateToProps = state => {
  let post = state.postsDomain.data.selectedPost
  return {
    post,
    errorMessage: state.postsDomain.ui.errorMessage,
    isPostTitleValid: state.postsDomain.ui.isPostTitleValid,
    isPostBodyValid: state.postsDomain.ui.isPostBodyValid
  }
}

let mapDispatchToProps = (dispatch,ownProps) => {
  return {
    onTitleChange: e => {
      dispatch(setPostProperty({title: e.target.value}))
    },
    onBodyChange: e => {
      dispatch(setPostProperty({body: e}))
      dispatch(validatePostBody(e))
    },
    onTagsChange: e => {
      dispatch(setPostProperty({tags: e.target.value}))
    },
    onSubmit: post => {
      dispatch(savePost(post))
    },
    validateTitle: e => {
      dispatch(validatePostTitle(e.target.value))
    }

  }
}


let PostFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostForm)

export default PostFormContainer
