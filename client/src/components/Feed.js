import React, { useEffect, useState } from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

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
    },
    feed__noPosts: {
        color: 'white',
        padding: '15px',
        marginTop: '35px',
        fontSize: '20px'
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

    if (!posts || !currentUser || !loaded) return null;
    else if (posts.length <= 0) return (
        <div className={classes.feed__noPosts} >
            Oops! Nothing here...
        </div>
    );
    else 


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