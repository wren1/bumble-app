import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../themes/Theme';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    profileHeader__info: {
        minHeight: '100px',
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileHeader__username: {
        color: 'black',
        fontWeight: 'bold'
    },
    profileHeader__description: {
        color: 'black'
    },
    profileHeader__icon: {

    },
    profileHeader__iconImg: {
        height: '100px',
        width: '100px'
    }
}));

const ProfileInfoBlock = ({ user }) => {
    const classes = useStyles(theme);

    return (
        <div className={classes.profileHeader__info} >
            <div className={classes.profileHeader__icon} >
                {!user.profilePic ? 
                <Avatar src='https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' className={classes.profileHeader__iconImg} />
                :
                <Avatar src={user.profilePic} className={classes.profileHeader__iconImg} />
                }
            </div>
            <div className={classes.profileHeader__username}>{user.username}</div>
            <div className={classes.profileHeader__description}>{user.description}</div>
        </div>
    )
}
export default ProfileInfoBlock;