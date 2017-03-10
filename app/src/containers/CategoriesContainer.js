import React from 'react'
import { connect } from 'react-redux'
import { fetchCategories, setCategoriesPaginationItems} from '../actions/categories.js'
import Categories from '../components/Categories.js'

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
    categories: state.categoriesDomain.data.categories
  }
}

let mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(setCategoriesPaginationItems(2))
    },
    fetchCategories: () => {
      dispatch(fetchCategories())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(CategoriesContainer)


