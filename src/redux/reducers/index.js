import { combineReducers } from 'redux'
import parentReducer from './parentReducer'
import childrenReducer from './childrenReducer'
export default combineReducers({
  parentReducer,
  childrenReducer,
})