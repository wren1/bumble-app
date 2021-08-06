import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container'

import { fade, makeStyles } from '@material-ui/core/styles';
import { theme } from '../themes/Theme';

import NavBar from './NavBar';
import Feed from './Feed';
import PostBlock from './PostBlock'
import SearchHeader from './SearchHeader';

import { USER_KEY } from '../store/actions/auth';
import { getFeedPosts } from '../store/actions/post';
import { loadLikes } from '../store/actions/likes';
import { getSearchPosts } from '../store/actions/post';
import { getUser } from '../store/actions/users';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 'none',
        // overflow: 'hidden',
    },
    postBlock: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '3px solid orange'
    }
}));

const Home = () => {
    const query = useSelector(state => state.current.search)
    // const likes = useSelector(state => state.current.currentUser.likes)
    const classes = useStyles(theme);
    const dispatch = useDispatch();
    const userId = window.localStorage.getItem(USER_KEY)
    const currentUser = useSelector(state => state.current.currentUser)

    // let allPosts = useSelector(state => state.post.posts);
    // const posts = [];
    // for (let post in allPosts) {
    //     posts.push(allPosts[post])
    // }


    let allPosts = useSelector(state => state.posts);
    // const posts = {};
    // for (let post in allPosts) {
    //     // posts[allPosts[post.id]] = allPosts[post]
    //     posts[allPosts[post]] = allPosts[post]
    // }
    let posts = [];
    if (allPosts) {
        for (let post in allPosts) {
            posts.push(allPosts[post])
        }
    }


    useEffect(() => {
        (async () => {
            // dispatch(loadLikes(userId))
            // console.log('Home useEffect: ', userId)
            await dispatch(getUser(userId))
            if (query) {
                await dispatch(getSearchPosts(query))
            } else {
                await dispatch(getFeedPosts(userId));
            }
        })();
    }, [query, posts.length])

    if (!currentUser) return null;


    return (
        <div>
            <NavBar />
            <Container className={classes.mainContainer}>
                {!query ? <PostBlock className={classes.postBlock} /> :
                <SearchHeader query={query} />}
                <Feed userId={userId} posts={posts} currentUser={currentUser} />
            </Container>
        </div>
    )
}
export default Home;