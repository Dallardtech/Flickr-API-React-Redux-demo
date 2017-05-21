import { combineReducers } from 'redux'
import photosReducer from './photosReducer'

const photoApp = combineReducers({
  postState: photosReducer
})

export default photoApp





