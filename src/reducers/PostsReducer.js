import {FETCH_POSTS_SUCCESS, FETCH_POSTS_FAIL} from './../constants/PostsConstants'

const initialState = {
    posts: [],
    error: ""
}

const PostsReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_POSTS_SUCCESS:
            return{
                ...state,
                posts: action.payload
            }
            case FETCH_POSTS_FAIL: 
            return{
                ...state,
                error: action.payload
            }
            default: return state
    }
}

export default PostsReducer