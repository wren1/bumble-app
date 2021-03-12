import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { theme } from '../themes/Theme';


const useStyles = makeStyles((theme) => ({
    propic: {
        position: 'absolute',
        left: '-85px',
        // bottom: '2px',
        cursor: 'pointer',
    },
    icon: {
        height: '55px',
        width: '55px',
    }
}));

const ProfilePic = ({ user, handleClick }) => {
    const classes = useStyles(theme);
    const history = useHistory();

    if (!user) return null;

    return ( 
        // <div className={classes.propic}>
        //     {!user.profilePic ? 
        //         <img src={require('../images/cute-bee.png')} className={classes.icon} />
        //     : 
        //         <img src={`"${user.profilePic}"`} />
        //     }
        // </div>
        <div className={classes.propic} onClick={handleClick} >
            {!user.profilePic ? 
            <Avatar src='https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' className={classes.icon} />
            :
            <Avatar src={user.profilePic} className={classes.icon} />
            }
        </div>
    )
}
export default ProfilePic;