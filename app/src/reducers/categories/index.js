import ui from './ui.js'
import data from './data.js'
import {combineReducers} from 'redux'

let categoryReducer = combineReducers({
  data, 
  ui
})

export default categoryReducer
