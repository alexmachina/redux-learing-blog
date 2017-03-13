import React from 'react'
import { connect } from 'react-redux'
import { fetchCategories, setCategoriesPaginationItems,
  hideCategoriesModal, showCategoriesModal, setSelectedCategory,
  clearSelectedCategory} from '../../actions/categories.js'
import Categories from '../../components/categories/Categories.js'

class CategoriesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCategories()
  }
  render() {
    return <Categories {...this.props} />

  }
}

let mapStateToProps = state => {
  return {
    categories: state.categoriesDomain.data.categories,
    showModal: state.categoriesDomain.ui.showModal,

  }
}

let mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => {
      dispatch(fetchCategories())
    },
    onNewCategoryClick: () => {
      dispatch(clearSelectedCategory())
      dispatch(showCategoriesModal())
    },
    hideModal: () => {
      dispatch(hideCategoriesModal())
    },
    handleEditClick: (category) => {
      dispatch(setSelectedCategory(category))
      dispatch(showCategoriesModal())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(CategoriesContainer)


