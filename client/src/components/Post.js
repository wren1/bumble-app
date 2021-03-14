import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import { fade, makeStyles } from '@material-ui/core/styles';
import { theme } from '../themes/Theme';

import { removePost } from '../store/actions/post'; 
import { likePost, unlikePost, loadLikes } from '../store/actions/likes';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import ProfilePic from './ProfilePic';

const useStyles = makeStyles((theme) => ({
    postContainer: {
        marginBottom: '10px',
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        width: '650px',
        maxWidth: '650',
        maxHeight: '1000',
        // overflow: 'hidden',
        overflowWrap: 'break-word',
        borderRadius: '5px',
        backgroundColor: '#fff',
        padding: '10px 20px 10px 20px',
        // position: 'relative'
    },
    feedPost__img: {
        maxWidth: '650px',
        height: 'auto',
        alignSelf: 'center',
        marginTop: '30px'
    },
    post__content: {
        margin: '10px 0px 10px 0',
        fontSize: '15px',
        overflowWrap: 'break-word',
    },
    quotePost: {
        fontSize: '60px'
    },
    textPost: {
        fontSize: '30px',
        overflowWrap: 'break-word',
    },
    iconButton: {
        height: '12px',
        width: '12px',
        marginRight: '10px'
    },
    postFooter: {
        alignSelf: 'flex-end'
    }
}));

const Post = ({ post, userId, likes, currentUser }) => {
    const dispatch = useDispatch()

    console.log('likes: ', likes)
    
    const users = useSelector(state => state.users)
    const user = users[`"${post.userId}"`]
    // const likes = useSelector(state => state.likes)
    const [loaded, setLoaded] = useState(false)
    const [numLikes, setNumLikes] = useState(post.Likes.length)
    const [isLiked, setIsLiked] = useState(likes.includes(post.id))
    const classes = useStyles(theme);
    userId = parseInt(userId)

    const handleLike = () => {
        if (!isLiked) {
            setIsLiked(true)
            setNumLikes((numLikes + 1))
            dispatch(likePost(post.id))
        } else {
            setIsLiked(false)
            setNumLikes((numLikes - 1))
            dispatch(unlikePost(post.id))
        }

    }

    const handleDelete = () => {
        if (isLiked) {
            dispatch(unlikePost(post.id))
        }
        dispatch(removePost(post))
    }

    useEffect(() => {
        (async () => {
            setLoaded(true)
        })()
    })

    if (!post || !user || !currentUser) return null;


    let isFollowing = false;
    if (currentUser.follows.includes(user.id)) {
        isFollowing = true;
    }


    return (
        <div className={classes.postContainer}>
            {/* <ProfilePic user={user} /> */}
            <PostHeader post={post} user={user} currentUser={currentUser} isFollowing={isFollowing} />
                    {!post.title ? null : 
                        <div className={post.type === 'quote' ? classes.quotePost : classes.textPost}>{post.title}</div> }
                    {!post.imgUrl ? null : <img src={post.imgUrl} className={classes.feedPost__img} />}
                    {!post.content ? null : <div className={classes.post__content} >{post.content}</div>}

            {/* <div className={classes.postFooter}>
                {post.userId !== userId ? null :
                <IconButton className={classes.iconButton} onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton> }
                <IconButton className={classes.iconButton} onClick={handleLike} >
                    {isLiked === true ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
            </div> */}

            <PostFooter post={post} user={user} handleLike={handleLike} isLiked={isLiked} setIsLiked={setIsLiked} handleDelete={handleDelete} userId={userId} numLikes={numLikes} />

        </div>
    )
}
export default Post;