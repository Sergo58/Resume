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
            if (res.data.resultCode === 0) {

                dispatch(setStatusAC('success'))
            } else {

            }
        })
        .catch((error) => {

        })
        .finally(()=>{
            dispatch(setStatusAC('success'))
        })
}

export const setErrorAC = (error) => ({type: 'APP/SET-ERROR', error})
export const setStatusAC = (status) => ({type: 'SET-STATUS', status})