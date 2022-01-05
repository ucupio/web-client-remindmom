import { combineReducers } from 'redux'
import parentReducer from './parentReducer'
import childrenReducer from './childrenReducer'
import medicalReducer from './medicalReducer'
import treatmentReducer from './treatmentReducer'

export default combineReducers({
  treatment: treatmentReducer,
  children: childrenReducer,
  medical: medicalReducer
})
