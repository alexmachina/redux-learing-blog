import React from 'react'
import Posts from '../components/Posts.js'
import { connect } from 'react-redux'
import {getPosts, showModal, hideModal } from '../actions/posts.js'

class PostsContainer extends React.Component {
  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    return <Posts  {...this.props}
    />
  }
}

let mapStateToProps = state => {
  return {
    posts: state.postsDomain.data.posts,
    showModal: state.postsDomain.ui.showModal,
    errorMessage: state.postsDomain.ui.errorMessage,
    isFetching: state.postsDomain.ui.isFetching
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
  }
}

PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps)(PostsContainer)

export default PostsContainer
