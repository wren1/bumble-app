
import { baseUrl } from './configUrl';
import { USER_KEY } from './auth';
import { loadPosts, editPost } from './post';



export const makeNewTag = (postId, tag) => async (dispatch, getState) => {
    const { authentication: { token } } = getState();
    const { posts } = getState();
    try {
        const userId = window.localStorage.getItem(USER_KEY);
        const res = await fetch(`/api/posts/${postId}/tags/${tag}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        });
        const { post } = await res.json();
        posts[post.id] = post;
        dispatch(loadPosts(posts))

    } catch (e) {
        console.log(e);
    }
}

export const removeTag = (postId, tag) => async (dispatch, getState) => {
    const { authentication: { token } } = getState();
    const { posts } = getState();
    const userId = window.localStorage.getItem(USER_KEY)
    const res = await fetch(`/api/posts/${postId}/tags/${tag}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        });
        if (res.ok) {
            const { post } = await res.json();
        dispatch(editPost(post))
        } else {
            console.error(res)
        }
    
}