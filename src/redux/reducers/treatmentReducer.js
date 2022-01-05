import { TREATMENT, ERROR_TREATMENT, LOADING_TREATMENT} from '../actionTypes'

const initialState = {
  treatment: [],
  errorTreatment: false,
  loadingTreatment: true
}

function treatmentReducer( state = initialState, action){
  let  { type, payload } = action

  switch(type){
    case TREATMENT:
      return { ...state, treatment: payload }
    case ERROR_TREATMENT:
      return { ...state, errorTreatment: payload }
    case LOADING_TREATMENT:
      return { ...state, loadingTreatment: payload }
    default:
      return state
  }
}

export default treatmentReducer