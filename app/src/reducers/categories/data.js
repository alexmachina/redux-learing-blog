let initialState = {
  selectedCategory:{
    name: '',
    description: '',
    image: ''
  },

  categories: []
}

 export default function data(state = initialState, action) {
  switch(action.type) {
    case 'SET_CATEGORY_PROPERTY':
      let category = Object.assign({}, state.selectedCategory, action.property)
      return Object.assign({}, state, {selectedCategory: category})
    case 'SET_CATEGORIES':
      return Object.assign({}, state, {categories: action.categories})
    case 'CLEAR_SELECTED_CATEGORY':
      return Object.assign({}, state, {selectedCategory: initialState.selectedCategory})
    default:
      return state
  }
}

