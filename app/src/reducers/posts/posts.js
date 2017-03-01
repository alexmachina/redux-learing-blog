import { combineReducers } from 'redux'
import data from './data.js'
import ui from './ui.js'

let postReducer = combineReducers({
  data,
  ui
})

export default postReducer
