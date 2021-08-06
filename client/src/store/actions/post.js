import { USER_KEY } from './auth';

import { loadUsers, loadOneUser } from './users';

export const NEW_POST = 'NEW_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const LOAD_POSTS = 'LOAD_POSTS';

export const loadPosts = (posts) => {
    return {
        type: LOAD_POSTS,
        posts
    }
}

export const deletePost = (post) => {
    return {
        type: DELETE_POST,
        post
    }
}

export const newPost = (post) => {
    return {
        type: NEW_POST,
        post
    }
}

export const editPost = (post) => {
    return {
        type: EDIT_POST,
        post
    }
}

export const getFeedPosts = (userId) => async (dispatch, getState) => {
    const { authentication: { token } } = getState();
    try {
        const res = await fetch(`/api/posts/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const { posts, users } = await res.json();
        for (let post in posts) {
            if (posts[post].Tags) {
                posts[post].Tags.map(tag => tag.description)
                posts[post].Likes.map(like => like.userId)
            }
        }
        dispatch(loadPosts(posts));
        dispatch(loadUsers(users));
    } catch (e) {
        console.log(e);
    }
}

export const getSearchPosts = (query) => async (dispatch, getState) => {
    try {
        let searchUrl;
        const { searchType } = getState(); 
        if (searchType === 'tag') {
            searchUrl = `/api/search/tags/${query}`
        } else {
            searchUrl = `/api/search/${query}`
        }
        const res = await fetch(searchUrl);
        const { results, users } = await res.json();
        
        dispatch(loadUsers(users))
        dispatch(loadPosts(results))
    } catch (e) {
        console.log(e);
    }
}

export const getTagPosts = (tag) => async (dispatch, getState) => {
    try {
        const res = await fetch(`/api/search/tags/${tag}`);
        const { results, users } = await res.json();

        dispatch(loadUsers(users))
        dispatch(loadPosts(results))
    } catch (e) {
        console.log(e);
    }
}

export const getUserPosts = (userId) => async (dispatch, getState) => {
    const { authentication: { token } } = getState();
    const res = await fetch(`/api/users/${userId}/posts`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const { user, posts } = await res.json();
    for (let post in posts) {
        if (posts[post].Tags) {
            posts[post].Tags.map(tag => tag.description)
            posts[post].Likes.map(like => like.userId)
        }
    }
    dispatch(loadOneUser(user));
    dispatch(loadPosts(posts))
}

export const makeNewPost = (title, content, type) => async (dispatch, getState) => {
    const { authentication: { token } } = getState();
    let imgUrl;
    if (type === 'image') {
        imgUrl = title;
    }
    try {
        const userId = window.localStorage.getItem(USER_KEY);
        const res = await fetch(`/api/posts`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, content, userId, type, imgUrl})
        });
        const { post } = await res.json();
        dispatch(newPost(post))
    } catch (e) {
        console.log(e);
    }
}

export const removePost = (post) => async (dispatch, getState) => {
    const { authentication: { token } } = getState();
    const userId = window.localStorage.getItem(USER_KEY)
    const res = await fetch(`/api/posts/${post.id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId})
        });
        if (res.ok) {
            dispatch(deletePost(post))
        } else {
            console.error(res)
        }
    
}

export const updatePost = (postId, post) => async (dispatch, getState) => {
    const { authentication: { token } } = getState();
    const userId = window.localStorage.getItem(USER_KEY)
    const res = await fetch(`/api/posts/${postId}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({post})
        });
    if (res.ok) {
        const { post } = await res.json()
        dispatch(editPost(post))
    } else {
        console.error(res)
    }
}

export const getLikedPosts = (userId) => async (dispatch, getState) => {
    const { authentication: { token } } = getState();
    const userId = window.localStorage.getItem(USER_KEY)
    const res = await fetch(`/api/users/${userId}/likes`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
    if (res.ok) {
        const { posts } = await res.json();
        for (let post in posts) {
            if (posts[post].Tags) {
                posts[post].Tags.map(tag => tag.description)
                posts[post].Likes.map(like => like.userId)
            }
        }
        dispatch(loadPosts(posts))
    } else {
        console.error(res)
    }
}