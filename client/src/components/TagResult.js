import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';import { fade, makeStyles } from '@material-ui/core/styles';
import { theme } from '../themes/Theme';

import { removePost } from '../store/actions/post'; 
import { likePost, unlikePost } from '../store/actions/likes';
import ProfilePic from './ProfilePic';


const useStyles = makeStyles((theme) => ({
    tagPostContainer: {
        marginBottom: '10px',
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        width: '650px',
        maxHeight: '1000',
        overflow: 'hidden',
        borderRadius: '5px',
        backgroundColor: '#fff',
        padding: '10px 20px 10px 20px'
    },
    tagFeedPost__img: {
        maxWidth: '650px',
        height: 'auto',
        alignSelf: 'center',
        marginTop: '30px'
    },
    tagPost__content: {
        margin: '10px 0px 10px 0',
        fontSize: '15px'
    },
    tagQuotePost: {
        fontSize: '60px'
    },
    textPost: {
        fontSize: '30px'
    },
    tagIconButton: {
        height: '12px',
        width: '12px',
        marginRight: '10px'
    },
    tagPostFooter: {
        alignSelf: 'flex-end'
    }
}));


const TagResult = ({ post, tag, userId, likes }) => {
    const dispatch = useDispatch()
    const classes = useStyles(theme)
    const user = useSelector(state => state.users[`"${post.userId}"`])
    const [isLiked, setIsLiked] = useState(likes.includes(post.id))

    const handleLike = () => {
        if (!isLiked) {
            setIsLiked(true)
            dispatch(likePost(post.id))
        } else {
            setIsLiked(false)
            dispatch(unlikePost(post.id))
        }

    }

    const handleDelete = () => {
        if (isLiked) {
            dispatch(unlikePost(post.id))
        }
        dispatch(removePost(post))
    }

    if (!post) return null;


    return (
        <div className={classes.tagPostContainer}>
            <ProfilePic user={user} />
                    {!post.title ? null : 
                        <div className={post.type === 'quote' ? classes.tagQuotePost : classes.tagTextPost}>{post.title}</div> }
                    {!post.imgUrl ? null : <img src={post.imgUrl} className={classes.tagFeedPost__img} />}
                    {!post.content ? null : <div className={classes.tagPost__content} >{post.content}</div>}
            <div className={classes.tagPostFooter}>
                {post.userId !== userId ? null :
                <IconButton className={classes.tagIconButton} onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton> }
                <IconButton className={classes.tagIconButton} onClick={handleLike} >
                    {isLiked === true ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
            </div>
        </div>
    )
}

export default TagResult;