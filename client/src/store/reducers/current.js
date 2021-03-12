export const CURRENT_TAG = 'CURRENT_TAG';
export const CURRENT_SEARCH = 'CURRENT_SEARCH';
export const CURRENT_SEARCH_TYPE = 'CURRENT_SEARCH_TYPE';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';

export const setCurrentTag = (tag) => ({ type: CURRENT_TAG, tag });
export const setCurrentSearch = (query) => ({ type: CURRENT_SEARCH, query });
export const setCurrentSearchType = (searchType) => ({ type: CURRENT_SEARCH_TYPE, searchType })
export const setCurrentUser = (user) => ({ type: SET_CURRENT_USER, user })
export const updateCurrentUser = (user) => ({ type: UPDATE_CURRENT_USER, user })

export default function currentReducer(state={ currentUser: null }, action) {
    let newState = {...state};
    switch(action.type) {
        case CURRENT_TAG:
            newState.tag = action.tag;
            return newState;
        case CURRENT_SEARCH:
            newState.search = action.query;
            return newState;
        case CURRENT_SEARCH_TYPE:
            newState.searchType = action.searchType;
            return newState;
        case SET_CURRENT_USER:
            newState.currentUser = action.user;
            return newState;
        default:
            return state;
    }
};