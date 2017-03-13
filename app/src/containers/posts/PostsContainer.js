import React from 'react'
import Posts from '../../components/posts/Posts.js'
import { connect } from 'react-redux'
import {getPosts, clearSelectedPost,
  setPostsActivePage, showModal, hideModal } from '../../actions/posts.js'

class PostsContainer extends React.Component {
  componentDidMount() {
    this.props.getPosts(this.props.activePage)
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
    isFetching: state.postsDomain.ui.isFetching,
    activePage: state.postsDomain.ui.activePage,
    items: state.postsDomain.ui.items,
    

  }
}

let mapDispatchToProps = (dispatch, getState) => {
  return {
    getPosts: (page) => {
      dispatch(getPosts(page))
    },
    closeModal: () => {
      dispatch(hideModal())
    },
    onNewPostClick: () => {
      dispatch(clearSelectedPost())
      dispatch(showModal())
    },
    handlePaginationSelect: (index) => {
      dispatch(setPostsActivePage(index))
      dispatch(getPosts(index))
    }
  }
}

PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps)(PostsContainer)

export default PostsContainer
