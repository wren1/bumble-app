import React, { useEffect, useState } from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import { USER_KEY } from '../store/actions/auth';
import { getFeedPosts } from '../store/actions/post';
import { loadLikes } from '../store/actions/likes';

import Post from './Post';
import { theme } from '../themes/Theme';

const useStyles = makeStyles((theme) => ({
    feed: {
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '650px',
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