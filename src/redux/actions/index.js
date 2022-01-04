import {CHILDREN, LOADING_CHILDREN, ERROR_CHILDREN } from '../actionTypes'

export function fetchChildrenById(id) {
    return (dispatch, previousState) => {
        fetch('http://localhost:4000/childrens/'+id)
            .then(res => res.json())
            .then(result => {
                dispatch({
                    type: CHILDREN,
                    payload: result
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