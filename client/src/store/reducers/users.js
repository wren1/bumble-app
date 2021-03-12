import { LOAD_USERS, LOAD_ONE_USER, FOLLOW_USER, UNFOLLOW_USER } from '../actions/users';

export default function userReducer(state = {}, action) {
    const newState = { ...state }
    switch(action.type) {
        case LOAD_USERS: {
            let newState = { ...state }
            action.users.forEach(user => newState[`${user.id}`] = user)
            return newState;
        }
        case LOAD_ONE_USER: {
            newState[`"${action.user.id}"`] = action.user
            return newState;
        }
        case FOLLOW_USER: {
            newState[`"${action.currentUserId}"`].follows = action.followedUserId;
            return newState;
            
        }
        case UNFOLLOW_USER: {
            let idx = newState[`"${action.currentUserId}"`].follows.indexOf(action.followedUserId)
            newState[`"${action.currentUserId}"`].follows.splice(idx, 1)
            return newState;
        }
        default: return state;
    }
}
