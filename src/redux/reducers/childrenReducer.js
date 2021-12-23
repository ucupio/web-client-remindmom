import { CHILDREN, CHILDRENS, ERROR_CHILDREN, LOADING_CHILDREN } from '../actionTypes'

const initialState = {
  children: {},
  childrens: [],
  error: false,
  loading: true
}

function childrenReducer( state = initialState, action){
  let  { type, payload } = action

  switch(type){
    case CHILDREN:
      return { ...state, children: payload }
    case CHILDRENS:
      return { ...state, childrens: payload }
    case ERROR_CHILDREN:
      return { ...state, error: payload }
    case LOADING_CHILDREN:
      return { ...state, loading: payload }
    default:
      return state
  }
}

export default childrenReducer