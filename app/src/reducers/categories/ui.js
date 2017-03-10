let initialState = {
  isFetching: false,
  fetchError: '',
  paginationItems: 0,
  paginationActivePage: 0,
  paginationOnSelect: () => {},
  isCategoryNameValid: true,
  isCategoryDescriptionValid: true
}

export default function ui(state = initialState, action) {
  switch(action.type) {
    case 'TOGGLE_CATEGORIES_FETCHING':
      return Object.assign(state, {}, {isFetching: !state.isFetching})
    case 'SET_CATEGORIES_FETCH_ERROR':
      return Object.assign(state, {}, {fetchError: action.fetchError})
    case 'SET_CATEGORIES_PAGINATION_ITEMS':
      return Object.assign(state, {}, {paginationItems: action.paginationItems})
    case 'SET_CATEGORIES_PAGINATION_ACTIVE_PAGE':
      return Object.assign(state, {}, {paginationActivePage: action.paginationActivePage})
    case 'SET_CATEGORIES_PAGINATION_ON_SELECT':
      return Object.assign(state, {}, {paginationOnSelect: action.paginationOnSelect})
    case 'SET_IS_CATEGORY_NAME_VALID':
      return Object.assign(state, {}, {isCategoryNameValid: action.isCategoryNameValid})
    case 'SET_IS_CATEGORY_DESCRIPTION_VALID':
      return Object.assign(state, {}, {isCategoryDescriptionValid: action.isCategoryDescriptionValid})
    default:
      return state
  }
}
