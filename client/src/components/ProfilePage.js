import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fade, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'

import { theme } from '../themes/Theme';
import { getUserPosts } from '../store/actions/post';
import { getUser } from '../store/actions/users'
import { USER_KEY } from '../store/actions/auth';


import ProfileHeader from './ProfileHeader';
import NavBar from './NavBar';
import Feed from './Feed';


const useStyles = makeStyles((theme) => ({
    userProfile__main: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 'none',
        backgroundColor: '#1d1d1d',
        // marginBottom: '100px'
    }
}));

const ProfilePage = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const currentUserId = window.localStorage.getItem(USER_KEY)

    const classes = useStyles(theme);

    const currentUser = useSelector(state => state.current.currentUser)
    let allPosts = useSelector(state => state.posts);
    const user = useSelector(state => state.users[`"${userId}"`])

    let posts = [];
    if (allPosts) {
        for (let post in allPosts) {
            posts.push(allPosts[post])
        }
    }

    
    useEffect(() => {
        (async () => {
            await dispatch(getUser(currentUserId))
            await dispatch(getUserPosts(userId))
        })();
    }, [userId])
    
    if (!user || !currentUser) return null;

    return (
        <Container className={classes.userProfile__main}>
            <ProfileHeader user={user} />
            <Feed userId={currentUserId} posts={posts} currentUser={currentUser} />
        </Container>
    )
}
export default ProfilePage;