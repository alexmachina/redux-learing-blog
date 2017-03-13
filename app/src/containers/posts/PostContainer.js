import React from 'react'
import {connect} from 'react-redux'
import Post from '../../components/posts/Post.js'
import {hideModal, showModal, getPost} from '../../actions/posts.js'
import RichTextEditor from 'react-rte'
class PostContainer extends React.Component {
  componentWillMount() {
    this.props.getPost(this.props.params.id)

  }
  render() {
    return (
      <Post {...this.props} />
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
 PostContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostContainer)

export default PostContainer


