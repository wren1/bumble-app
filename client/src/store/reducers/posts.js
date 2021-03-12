import { LOAD_POSTS, NEW_POST, DELETE_POST, EDIT_POST } from '../actions/post';

export default function postReducer(state = {}, action) {
    let newState = { ...state }
    switch (action.type) {
        case LOAD_POSTS: {
            newState = {};
            // action.posts.forEach(post => newState[`"${post.id}"`] = post)
            for (let post in action.posts) {
                newState[`"${action.posts[post].id}"`] = action.posts[post]
            }
            return newState;
        }
        case NEW_POST: {
            newState[`"${action.post.id}"`] = action.post;
            return newState;
        }
        case DELETE_POST:
            delete newState[`"${action.post.id}"`];
            return newState;
        case EDIT_POST:
            newState[`"${action.post.id}"`] = action.post;
            return newState;
        default: {
            return state;
        }
    }
}