import { baseUrl } from './configUrl';
import { setCurrentUser } from '../reducers/current';

export const TOKEN_KEY = 'BUMBLE_USER_TOKEN';
export const USER_KEY = 'USER_ID';

export const SET_TOKEN = 'SET_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';

// set token when logging in
export const setToken = (token) => {
    return {
        type: SET_TOKEN,
        token
    }
}

//remove token when logging out
export const removeToken = (token) => {
    return {
        type: REMOVE_TOKEN
    }
}

// load token thunk
export const loadToken = () => async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) {
        dispatch(setToken(token));
    }
}

// login thunk
export const login = (email, password ) => async (dispatch, getState) => {
    const res = await fetch(`/api/users/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    if (res.ok) {
        const { token, user } = await res.json();
        window.localStorage.setItem(TOKEN_KEY, token);
        window.localStorage.setItem(USER_KEY, user.id);
        dispatch(setToken(token))
        dispatch(setCurrentUser(user))
    }
}

// logout thunk
export const logout = () => async (dispatch, getState) => {
    const { authentication: { token } } = getState();
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem(USER_KEY);
    dispatch(removeToken(token));
    dispatch(setCurrentUser(null))
}

// signup thunk
export const signup = (username, email, password) => async (dispatch, getState) => {
    const res = await fetch(`/api/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    })
    if (res.ok) {
        const { token, user } = await res.json();
        window.localStorage.setItem(TOKEN_KEY, token);
        window.localStorage.setItem(USER_KEY, user.id);
        dispatch(setToken(token))
        dispatch(setCurrentUser(user))
    } else {
        console.log(res);
    }
}