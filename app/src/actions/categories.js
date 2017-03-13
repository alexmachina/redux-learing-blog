import {postJson, getJson, putJson } from '../utils/fetch.js'

export function fetchCategories() {
  return dispatch => {
    getJson('http://localhost:8080/categories')
      .then(res => {
        dispatch(setCategories(res.categories))
        dispatch(setCategoriesPaginationItems(Math.ceil(res.count / 5)))
    })
  } }

export function setCategories(categories) {
  return {
    type: 'SET_CATEGORIES',
    categories
  }
}

export function setCategoriesPaginationItems(items) {
  return {
    type:'SET_CATEGORIES_PAGINATION_ITEMS',
    paginationItems: items
  }
}

export function showCategoriesModal() {
  return {
    type: 'SHOW_CATEGORIES_MODAL'
  }
}

export function hideCategoriesModal() {
  return {
    type: 'HIDE_CATEGORIES_MODAL'
  }
}

export function setCategoryProperty(property) {
  return {
    type: 'SET_CATEGORY_PROPERTY',
    property
  }
}

export function saveCategory(category) {
  return dispatch => {
    dispatch(validateCategoryName(category.name))
    dispatch(validateCategoryDescription(category.description))

    if(category.name && category.description) {
      if(category._id) {
        putJson('http://localhost:8080/category/' + category._id, category)
          .then(() => {
            dispatch(hideCategoriesModal())
            dispatch(fetchCategories())
          })
      } else {
        postJson('http://localhost:8080/category', category)
          .then(() => {
            dispatch(hideCategoriesModal())
            dispatch(fetchCategories())
          })
      }
    }
  }
}



export function setSelectedCategory(category) {
  return {
    type:'SET_SELECTED_CATEGORY',
    category
  }
}

export function clearSelectedCategory() {
  return {
    type: 'CLEAR_SELECTED_CATEGORY'
  }
}

export function setCategoryNameValid() {
  return {
    type:'SET_CATEGORY_NAME_VALID'
  }
}

export function setCategoryNameInvalid() {
  return {
    type:'SET_CATEGORY_NAME_INVALID'
  }
}

export function validateCategoryName(name) {
  return dispatch => {
    if(name) {
      dispatch(setCategoryNameValid())
    } else {
      dispatch(setCategoryNameInvalid())
    }
  }
}

export function setCategoryDescriptionValid() {
  return {
    type:'SET_CATEGORY_DESCRIPTION_VALID'
  }
}

export function setCategoryDescriptionInvalid() {
  return {
    type:'SET_CATEGORY_DESCRIPTION_INVALID'
  }
}

export function validateCategoryDescription(description) {
  return dispatch => {
    if(description) {
      dispatch(setCategoryDescriptionValid())
    } else {
      dispatch(setCategoryDescriptionInvalid())
    }
  }
}
