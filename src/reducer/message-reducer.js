import {messageAPI} from "../api/api";

const initialState = {
    status: null,
    error: null,

}

export const MessageReducer = (state=initialState,action) => {
    switch (action.type) {
        case 'SET-STATUS':
            return {...state, status: action.status}
        case 'SET-ERROR':
            return {...state, error: action.error}
        default:
            return {...state}
    }
}

export const messageTC = (values) => (dispatch) => {
    dispatch(setStatusAC('loading'))
    messageAPI.send(values)
        .then(res => {


                dispatch(setStatusAC('success'))

        })
        .catch((error) => {
            dispatch(setStatusAC(null))
            dispatch(setErrorAC('error'))
            console.log(error)
        })

}

export const setErrorAC = (error) => ({type: 'SET-ERROR', error})
export const setStatusAC = (status) => ({type: 'SET-STATUS', status})