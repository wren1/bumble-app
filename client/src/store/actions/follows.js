import { loadUsers } from './users';


export const getFollows = (userId) => async (dispatch, getState) => {
    const { authentication: { token } } = getState();
    try {
        const res = await fetch(`/api/users/${userId}/follows`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const { users } = await res.json();
        dispatch(loadUsers(users))
    } catch (e) {
        console.error(e)
    }
}

export const follow = (userId, currentUserId) => async (dispatch, getState) => {
    const { authentication: { token } } = getState();
    const { current: { currentUser } } = getState();
    try {
        const res = await fetch(`/api/users/${userId}/follow`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                currentUserId
            })
        })
        if (res.ok) {
            currentUser.follows.push(userId)
            dispatch(currentUser)
        }
    } catch (e) {
        console.error(e)
    }
}

export const unfollow = (userId, currentUserId) => async (dispatch, getState) => {
    const { authentication: { token } } = getState();
    const { current: { currentUser } } = getState();
    try {
        const res = await fetch(`/api/users/${userId}/follow`, {
        method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ currentUserId })
        })
        if (res.ok) {
            let idx = currentUser.follows.indexOf(userId)
            currentUser.follows.splice(idx, 1)
            dispatch(currentUser)
        }
    } catch (e) {
        console.error(e)
    }
    
}