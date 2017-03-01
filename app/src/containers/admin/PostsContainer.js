import React from 'react'
import Posts from '../../components/admin/posts/Posts.js'
import { connect } from 'react-redux'
import {setPostProperty, getPosts, showModal, hideModal } from '../../actions/posts.js'

class PostsContainer extends React.Component {
  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    return <Posts posts={this.props.posts}
            showModal={this.props.showModal}
            onNewPostClick={this.props.onNewPostClick}
            closeModal={this.props.closeModal}
            post={this.props.post}
            setPostProperty={this.props.setPostProperty}
    />
  }
}

let mapStateToProps = state => {
  return {
    posts: state.postsDomain.data.posts,
    showModal: state.postsDomain.ui.showModal,
    post: state.postsDomain.data.selectedPost
    
  }
}

let mapDispatchToProps = (dispatch, getState) => {
  return {
    getPosts: () => {
      dispatch(getPosts())
    },
    closeModal: () => {
      dispatch(hideModal())
    },
    onNewPostClick: () => {
      dispatch(showModal())
    },
    setPostProperty: (property) => {
      dispatch(setPostProperty(property))
    }
  }
}

PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps)(PostsContainer)

export default PostsContainer
