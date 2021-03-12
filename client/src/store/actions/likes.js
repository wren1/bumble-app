import { baseUrl } from './configUrl';
import { USER_KEY } from './auth';
import { loadPosts } from './post';
import { setCurrentUser } from '../reducers/current';

export const NEW_LIKE = 'NEW_LIKE';
export const GET_LIKES = 'GET_LIKES';
export const UNLIKE = 'UNLIKE';

export const newLike = (postId) => {
    return {
        type: NEW_LIKE,
        postId
    }
}

export const unLike = (postId) => {
    return {
        type: UNLIKE,
        postId
    }
}

export const getLikes = (postIds) => {
    return {
        type: GET_LIKES,
        postIds
    }
}

export const loadLikes = (userId) => async (dispatch, getState) => {
    const { authentication: { token } } = getState();
    try {
        const res = await fetch(`/api/users/${userId}/likes`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const { posts } = await res.json();
        dispatch(loadPosts(posts))
    } catch(e) {
        console.log(e);
    }
}

export const likePost = (id) => async (dispatch, getState) => {
    const { authentication: { token } } = getState();
    const userId = window.localStorage.getItem(USER_KEY)
    try {
        const res = await fetch(`/api/posts/${id}/like`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({userId})
        })
        const { like: { postId } } = await res.json();
        dispatch(newLike(postId))
        // dispatch(setCurrentUser())
    } catch(e) {
        console.log(e);
    }
}

export const unlikePost = (postId) => async (dispatch, getState) => {
    const { authentication: { token } } = getState();
    const userId = window.localStorage.getItem(USER_KEY)
    try {
        const res = await fetch(`/api/posts/${postId}/like`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({userId})
        })
        dispatch(unLike(postId))
    } catch(e) {
        console.log(e);
    }
}