import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../themes/Theme';
import Container from '@material-ui/core/Container';

import { getLikedPosts } from '../store/actions/post';
import LikesHeader from './LikesHeader';
import Feed from './Feed';


const useStyles = makeStyles((theme) => ({
    likesPage__main: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#1d1d1d',
        display: 'flex',
        justifyContent: 'center'
    }
}));

const LikesPage = () => {
    const classes = useStyles(theme)
    const dispatch = useDispatch();
    const { userId } = useParams();

    const posts = useSelector(state => state.post.posts);
    const user = useSelector(state => state.users[userId])


    useEffect(() => {
        dispatch(getLikedPosts(userId))
    }, [userId])

    if (!user) return null;

    return (
        <Container className={classes.likesPage__main}>
            <LikesHeader user={user} />
            <Feed user={user} posts={posts} />
        </Container>
    )
}


export default LikesPage;