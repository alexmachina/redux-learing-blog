import React from 'react'
import {connect} from 'react-redux'
import PostPublic from '../../components/posts/PostPublic.js'
import {hideModal, showModal, getPost} from '../../actions/posts.js'
import RichTextEditor from 'react-rte'

class PostPublicContainer extends React.Component {
  componentWillMount() {
    this.props.getPost(this.props.params.id)

  }
  render() {
    return (
      <PostPublic {...this.props} />
    )
  }
}

let mapStateToProps = state => {
  return {
    post: {
      category: state.postsDomain.data.selectedPost.category,
      title: state.postsDomain.data.selectedPost.title,
      body: state.postsDomain.data.selectedPost.body.toString('html')
    },
    showModal: state.postsDomain.ui.showModal
  }
}


let mapDispatchToProps = dispatch => {
  return {
    closeModal: () => {
      dispatch(hideModal())
    },
    onEditClick: () => {
      dispatch(showModal())
    },
    getPost: (id) => {
        dispatch(getPost(id))
    }
  }

}
 PostPublicContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostPublicContainer)

export default PostPublicContainer


