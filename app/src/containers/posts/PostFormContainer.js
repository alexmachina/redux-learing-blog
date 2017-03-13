import PostForm from '../../components/posts/PostForm.js'
import { connect } from 'react-redux'
import { setPostProperty, savePost, validatePostTitle, validatePostBody,
  validatePostCategory} from '../../actions/posts.js'
import {fetchCategories} from '../../actions/categories.js'

let mapStateToProps = state => {
  let post = state.postsDomain.data.selectedPost
  return {
    post,
    errorMessage: state.postsDomain.ui.errorMessage,
    isPostTitleValid: state.postsDomain.ui.isPostTitleValid,
    isPostBodyValid: state.postsDomain.ui.isPostBodyValid,
    isPostCategoryValid: state.postsDomain.ui.isPostCategoryValid,
    categories: state.categoriesDomain.data.categories
  }
}

let mapDispatchToProps = (dispatch,ownProps) => {
  return {
    onCategoryChange: e => {
      dispatch(validatePostCategory(e.target.value))
      dispatch(setPostProperty({category: e.target.value}))
    },
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

    fetchCategories: () => {
      dispatch(fetchCategories())
    },

    validateTitle: e => {
      dispatch(validatePostTitle(e.target.value))
    },


  }
}


let PostFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostForm)

export default PostFormContainer
