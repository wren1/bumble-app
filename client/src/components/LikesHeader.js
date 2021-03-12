import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import { theme } from '../themes/Theme';
import ProfilePic from './ProfilePic';


const useStyles = makeStyles((theme) => ({
    likesPage__header: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    },
    likesPage__headerText: {
        color: 'black'
    }
}));

const LikesHeader = ({ user }) => {

    const classes = useStyles(theme);

    if (!user) return null;

    return (
        <div className={classes.likesPage__header}>
            <ProfilePic user={user} />
            <div className={classes.likesPage__headerText} >{user.username}'s likes</div>
        </div>
    )
}
export default LikesHeader;