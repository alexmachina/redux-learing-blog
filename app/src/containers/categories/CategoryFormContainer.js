import CategoryForm from '../../components/categories/CategoryForm.js'
import { connect } from 'react-redux'
import { setCategoryProperty, saveCategory,
  validateCategoryName, validateCategoryDescription} from '../../actions/categories.js'

let mapStateToProps = state => {
  return {
    category: state.categoriesDomain.data.selectedCategory,
    isNameValid: state.categoriesDomain.ui.isNameValid,
    isDescriptionValid: state.categoriesDomain.ui.isDescriptionValid
  }
}

let mapDispatchToProps = dispatch => {

  return {
    onNameChange: e => {
      dispatch(setCategoryProperty(
        { name: e.target.value })) },

    onDescriptionChange: e => {
      dispatch(setCategoryProperty(
        {description: e.target.value}))
    },

    saveCategory: category => {
      dispatch(saveCategory(category))
    },

    validateName: e => {
      dispatch(validateCategoryName(e.target.value))
    },

    validateDescription: e => {
      dispatch(validateCategoryDescription(e.target.value))
    }
  }

}

let CategoryFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps)(CategoryForm)

export default CategoryFormContainer

