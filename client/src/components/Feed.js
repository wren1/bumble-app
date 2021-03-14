import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Container from '@material-ui/core/Container';
import { fade, makeStyles } from '@material-ui/core/styles';

import { USER_KEY } from '../store/actions/auth';
import { getFeedPosts } from '../store/actions/post';
import { loadLikes } from '../store/actions/likes';

import Post from './Post';
import { CollectionsBookmarkOutlined } from '@material-ui/icons';
import { theme } from '../themes/Theme';

const useStyles = makeStyles((theme) => ({
    feed: {
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '650px',
        // overflow: 'hidden',
    }
}));

const Feed = ({ userId, posts, currentUser }) => {
    const [loaded, setLoaded] = useState(false)
    const loggedIn = useSelector(state => !!state.authentication.token);
    const query = useSelector(state => state.current.search)
    // const likes = useSelector(state => state.likes);
    const dispatch = useDispatch();

    console.log('2 in feed')

    
    const classes = useStyles(theme)
    // console.log('in feed posts: ', currentUser, posts, posts.length)


    // useEffect(() => {
    //     console.log('load likes: ', likes)
    //     dispatch(loadLikes(userId))
    // }, [])
    let likes;

    useEffect(() => {
        (async () => {
            setLoaded(true)
        })()
    })

    if (posts.length <= 0 || !posts || !currentUser || !loaded) return null; 

    console.log('3 after check in feed: ')

    return (
        <Container className={classes.feed}>
            {posts.map((post) => {
                return (
                    <Post key={post.id} post={post} userId={userId} likes={currentUser.likes} currentUser={currentUser} />
                )
            })}
        </Container>
    )
}
export default Feed;