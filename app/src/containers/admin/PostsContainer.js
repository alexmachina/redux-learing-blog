import React from 'react'
import { connect } from 'react-redux'
import PostTable from '../../components/admin/PostTable.js'
import { getPosts } from '../../actions/posts.js'

class PostsContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(getPosts(this.props.authorization))
  }

  render(){ 
    return (
      <PostTable 
        posts={this.props.posts}
      />

    )
  }
}
let mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    authorization: state.login.token
  }
}


PostsContainer = connect(
  mapStateToProps)(PostsContainer)

export default PostsContainer
