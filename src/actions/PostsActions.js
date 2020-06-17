import {FETCH_POSTS_SUCCESS, FETCH_POSTS_FAIL} from './../constants/PostsConstants'
import axios from 'axios'

export const fetchPostsSuccess = (posts) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}

export const fetchPostsFail = (error) =>{
    return {
        type: FETCH_POSTS_FAIL,
        payload: error
    }
}

export const fetchPostsRequest = () => {
    return dispatch => {
        axios({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET'
        })
        .then(res =>{
            dispatch(fetchPostsSuccess(res.data))
        })
        .catch(err =>{
            dispatch(fetchPostsFail(err))
        })
    }
}