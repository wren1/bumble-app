import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import AddBoxIcon from '@material-ui/icons/AddBox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CloseIcon from '@material-ui/icons/Close';
import { fade, makeStyles } from '@material-ui/core/styles';
import { theme } from '../themes/Theme';

import { follow, unfollow } from '../store/actions/follows';

import ProfilePic from './ProfilePic';


const useStyles = makeStyles((theme) => ({
    postHeader: {
        height: '50px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'space-between',
        borderBottom: '1px solid lightgray',
        paddingBottom: '10px',
        marginBottom: '15px'
    },
    post__username: {
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '16px'
    },
    post__date: {
        color: 'grey'
    },
    postHeader__user: {
        display: 'flex',
        alignItems: 'center'
    },
    postHeader__follow: {
        color: 'lightgray',
        marginLeft: '5px',
        cursor: 'pointer'
    }
}))


const PostHeader = ({ user, post, currentUser, isFollowing }) => {
    const classes = useStyles(theme);
    const history = useHistory();
    const dispatch = useDispatch();

    const [following, setFollowing] = useState(isFollowing)
    const [hovering, setHovering] = useState(false)

    const handleClick = () => {
        history.push(`/user/${user.id}`)
    }

    const handleFollow = () => {
        dispatch(follow(user.id, currentUser.id))
        setFollowing(true)
    }

    const handleUnfollow = () => {
        dispatch(unfollow(user.id, currentUser.id))
        setFollowing(false)
    }

    if (!post || !user) return null;


    const followIcon = () => {
        if (currentUser.id === user.id) {
            return null;
        } else if (!following) {
            return <AddBoxIcon onClick={handleFollow} />
        } else {
            if (!hovering) {
                return <CheckBoxIcon onClick={handleUnfollow} />
            } else {
                return <CloseIcon onClick={handleUnfollow} />
            }
        }
    }

    const dateCreated = new Date(post.createdAt)


    return (
        <div className={classes.postHeader}>
            <ProfilePic user={user} handleClick={handleClick} />
            <div className={classes.postHeader__user}>
                <div className={classes.post__username} onClick={handleClick} >
                    {user.username}
                </div>
                <SvgIcon className={classes.postHeader__follow} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
                    {followIcon()}
                </SvgIcon>
            </div>
            <div className={classes.post__date} >
                {`${dateCreated.getMonth()}/${dateCreated.getDay()}/${dateCreated.getFullYear()}`}
            </div>
        </div>
    )
}

export default PostHeader;