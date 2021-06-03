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
    const classes = useStyles(theme)
    const [loaded, setLoaded] = useState(false)

    
    useEffect(() => {
        (async () => {
            setLoaded(true)
        })()
    })

    if (posts.length <= 0 || !posts || !currentUser || !loaded) return null; 


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