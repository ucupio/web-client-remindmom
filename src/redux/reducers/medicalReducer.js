import { MEDICALRECORDS, LOADING_MEDICALRECORD, ERROR_MEDICALRECORD } from '../actionTypes'

const initialState = {
  medicalRecords: [],
  errorRecord: false,
  loadingRecord: true
}

function medicalReducer( state = initialState, action){
  let  { type, payload } = action

  switch(type){
    case MEDICALRECORDS:
      return { ...state, medicalRecords: payload }
    case ERROR_MEDICALRECORD:
      return { ...state, errorRecord: payload }
    case LOADING_MEDICALRECORD:
      return { ...state, loadingRecord: payload }
    default:
      return state
  }
}

export default medicalReducer