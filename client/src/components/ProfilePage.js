import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'

import { theme } from '../themes/Theme';
import { getUserPosts } from '../store/actions/post';
import { getUser } from '../store/actions/users'
import { USER_KEY } from '../store/actions/auth';


import ProfileHeader from './ProfileHeader';
import ReturnHomeButton from './ReturnHomeButton';
import Feed from './Feed';


const useStyles = makeStyles((theme) => ({
    userProfile__main: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 'none',
        backgroundColor: '#1d1d1d',
        marginBottom: '50px',
    }
}));

const ProfilePage = () => {
    const [loaded, setLoaded] = useState(false)
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
            setLoaded(true)
        })();
    }, [userId])
    
    if (!user || !currentUser || !loaded) return null;

    return (
        <div>
            <Container className={classes.userProfile__main}>
                <ReturnHomeButton />
                <ProfileHeader user={user} />
                <Feed userId={currentUserId} posts={posts} currentUser={currentUser} />
            </Container>
        </div>
    )
}
export default ProfilePage;