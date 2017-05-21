import { combineReducers } from 'redux'
import postReducer from './postReducer'

const todoApp = combineReducers({
  postState: postReducer
})

export default todoApp





