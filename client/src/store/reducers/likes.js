import { GET_LIKES, NEW_LIKE, UNLIKE } from '../actions/likes';

export default function likesReducer(state = [], action) {
    switch (action.type) {
        case GET_LIKES: {
            return [
                ...state,
                ...action.postIds
            ]
        }
        case NEW_LIKE: {
            return [
                ...state,
                action.postId
            ]
        }
        case UNLIKE: {
            return [
                ...state.slice(0, state.indexOf(action.postId)), 
                ...state.slice(state.indexOf(action.postId) + 1)
            ]
        }
        default: {
            return state;
        }
    }
}