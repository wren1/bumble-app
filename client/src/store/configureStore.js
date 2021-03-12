import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import authentication from './reducers/auth';
import posts from './reducers/posts';
import users from './reducers/users';
import likes from './reducers/likes';
import current from './reducers/current';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    authentication,
    posts,
    users,
    likes,
    current
})

const configureStore = (initialState) => {
    return createStore(
        reducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );
};

export default configureStore;