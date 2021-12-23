import { PARENT, PARENTS, ERROR_PARENT, LOADING_PARENT } from '../actionTypes'

const initialState = {
  parent: {},
  parents: [],
  error: false,
  loading: true
}

function parentReducer( state = initialState, action){
  let  { type, payload } = action

  switch(type){
    case PARENT:
      return { ...state, parent: payload }
    case PARENTS:
      return { ...state, parents: payload }
    case ERROR_PARENT:
      return { ...state, error: payload }
    case LOADING_PARENT:
      return { ...state, loading: payload }
    default:
      return state
  }
}

export default parentReducer