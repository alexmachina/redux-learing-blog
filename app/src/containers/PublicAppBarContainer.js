import { connect } from 'react-redux'
import PublicAppBar from '../components/PublicAppBar.js'
import { fetchCategories } from '../actions/categories.js'

let mapStateToProps = state => {
  return {
    categories: state.categoriesDomain.data.categories
  }
}

let mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => {
      dispatch(fetchCategories())
    }
  }
}


let PublicAppBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicAppBar)

export default PublicAppBarContainer
