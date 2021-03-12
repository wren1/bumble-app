import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fade, makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { theme } from '../themes/Theme';
import ProfileInfoBlock from './ProfileInfoBlock';


const useStyles = makeStyles((theme) => ({
    profilePage__header: {
        width: '100%',
        minHeight: '100px',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '100px',
        position: 'relative',
        zIndex: '9',
        top: '10px',
        padding: '20px'
    }
}));

const ProfileHeader = ({ user }) => {
    // const { userId } = useParams();
    const dispatch = useDispatch();

    const classes = useStyles(theme);

    // const user = useSelector(state => state.users[userId])

    if (!user) return null;

    return (
        <div className={classes.profilePage__header}>
            {/* <div className={classes.userProfile__headerImg} >
                {!user.banner ? 
                    null
                :
                    <img src={user.benner} />
                }
            </div> */}
            <ProfileInfoBlock user={user} />
        </div>
    )
}
export default ProfileHeader;