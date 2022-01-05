import axios from 'axios'
import {
    CHILDREN, 
    LOADING_CHILDREN, 
    ERROR_CHILDREN,
    MEDICALRECORDS,
    ERROR_MEDICALRECORD,
    LOADING_MEDICALRECORD,
    TREATMENT,
    ERROR_TREATMENT,
    LOADING_TREATMENT
} from '../actionTypes'

export const fetchChildrenById = (id) => {
    return (dispatch, previousState) => {
        axios({
            method: 'GET',
            url: `https://remindmom-kia-server.herokuapp.com/children/details/${id}`
        })
        .then(({data}) => {
            dispatch({
                type: CHILDREN,
                payload: data
            })
        })
        .catch((err) => {
            dispatch({
                type: ERROR_CHILDREN,
                payload: err
            })
        }).finally(() => {
            dispatch({
                type: LOADING_CHILDREN,
                payload: false
            })
        })
    }
}

export const fetchMedicalRecords = (id) => {
    return (dispatch, previousState) => {
        axios({
            method: 'GET',
            url: `https://remindmom-kia-server.herokuapp.com/medicalRecord/${id}`
        })
        .then(({data}) => {
            dispatch({
                type: MEDICALRECORDS,
                payload: data
            })
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: ERROR_MEDICALRECORD,
                payload: err
            })
        }).finally(() => {
            dispatch({
                type: LOADING_MEDICALRECORD,
                payload: false
            })
        })
    }
}

export const fetchMedicalTreatment = () => {
    return (dispatch, previousState) => {
        axios({
            method: 'GET',
            url: `https://remindmom-kia-server.herokuapp.com/treatment`
        })
        .then(({data}) => {
            dispatch({
                type: TREATMENT,
                payload: data
            })
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: ERROR_TREATMENT,
                payload: err
            })
        }).finally(() => {
            dispatch({
                type: LOADING_TREATMENT,
                payload: false
            })
        })
    }
}