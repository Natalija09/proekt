import {FETCH_USERS_SUCCESS, FETCH_USERS_FAIL} from '../constants/UsersConstants'
import axios from 'axios'

export const fetchUsersSuccess = (users) =>{
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const fetchUsersFail = (error) =>{
    return{
        type: FETCH_USERS_FAIL,
        payload: error
    }
}

export const fetchUsersRequest = () => {
    return dispatch => {
        axios({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: "GET"
        })
        .then(res =>{
            dispatch(fetchUsersSuccess(res.data))
        })
        .catch(err => {
            dispatch(fetchUsersFail(err))
        })
    }
}