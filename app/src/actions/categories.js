import {postJson, getJson, putJson } from '../utils/fetch.js'

export function fetchCategories() {
  return dispatch => {
    getJson('http://localhost:8080/categories')
      .then(res => {
        dispatch(setCategories(res.categories))
        dispatch(setCategoriesPaginationItems(Math.ceil(res.count / 5)))
    })
  }
}

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
