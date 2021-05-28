import { baseUrl } from './configUrl';
import { setCurrentUser } from  '../reducers/current';

export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_ONE_USER = 'LOAD_ONE_USER';
export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const loadUsers = (users) => {
    return {
        type: LOAD_USERS,
        users
    }
}

export const loadOneUser = (user) => {
    return {
        type: LOAD_ONE_USER,
        user
    }
}

export const followUser = (currentUserId, followedUserId) => {
    return {
        type: FOLLOW_USER,
        currentUserId,
        followedUserId
    }
}

export const unfollowUser = (currentUserId, followedUserId) => {
    return {
        type: UNFOLLOW_USER,
        currentUserId,
        followedUserId
    }
}

export const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        user
    }
}

export const getUser = (userId) => async (dispatch, getState) => {
    const { authentication: { token } } = getState();
    try {
        const res = await fetch(`/api/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const { user } = await res.json();
        dispatch(setCurrentUser(user))
    } catch (e) {
        console.error(e)
    }
}