import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { fade, makeStyles } from '@material-ui/core/styles';
import { theme } from '../themes/Theme';
import { updatePost } from '../store/actions/post';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import Icon from '@material-ui/core/Icon';
import Dialog from '@material-ui/core/Dialog';

import Tags from './Tags';

import { likePost, unlikePost } from '../store/actions/likes';


const useStyles = makeStyles((theme) => ({
    postFooterMain: {
        width: '100%'
    },
    postFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '10px',
        width: '100%'
    },
    iconButton: {
        height: '15px',
        width: '15px',
        margin: '2px 5px'
    },
    postFooter__buttons: {

    },
    postFooter__likes: {

    },
    makeTextPost: {
        alignSelf: 'center',
        justifySelf: 'center',
        height: '400px',
        width: '200px'
    },
    textInputForm: {
        height: '100px',

    },
    textBoxInput: {
        height: '20px',
    },
    postBlock__button: {
        position: 'relative',
        top: '20px'
    },
    postBlock__makePostDiv: {
        cursor: 'pointer',
    },
    postBlock__makePostIcon: {
        color: 'gray',
        height: '55px',
        width: '55px'
    },
    postBlock__dialogBox: {
        width: '550px',
        height: '450px',
        padding: '25px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-between',
        justifyContent: 'space-between'
    },
    postBlock__textInputArea: {
        display: 'flex',
        flexDirection: 'column'
    },
    postBlock__dialogBoxButtons: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    postBlock__dialogBoxButton: {
        margin: '5px 5px 5px 5px',
        padding: '10px',
    },
    postBlock__dialogBoxTitleInput: {
        height: '75px'
    }
}))

const PostFooter = ({ post, user, handleDelete, handleLike, isLiked, setIsLiked, userId, numLikes }) => {
    const dispatch = useDispatch()
    const classes = useStyles(theme);
    
    const [displayTextPost, setDisplayTextPost] = useState(false);
    const [content, setContent] = useState(post.content || '')
    const [title, setTitle] = useState(post.title || '')
    const [imgUrl, setImgUrl] = useState(post.imgUrl || '')
    const [postType, setPostType] = useState(post.type)
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    if (!post) return null;

    function rand() {
        return Math.round(Math.random() * 20) - 10;
    }

    function getModalStyle() {
        const top = 50 + rand();
        const left = 50 + rand();

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }
    const body = (
        <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
        <PostFooter />
        </div>
    );
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content) post.content = content;
        if (title) post.title = title;
        if (imgUrl) post.imgUrl = imgUrl;

        dispatch(updatePost(post.id, post))

        setOpen(false)
    }
    const handleOpen = () => {
        setPostType(postType);
        setOpen(true);
    }

    const handleClose = (e) => {
        setOpen(false);
    }


    const makePostDiv = () => {
        if (setOpen) {
            if (postType === 'text') {
                return (
                    <div className={classes.postBlock__textInputArea}>
                        <TextField className={classes.postBlock__dialogBoxTitleInput} 
                            // placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextField className={classes.postBlock__dialogBoxContentInput} 
                            id="standard-multiline-static"
                            // placeholder="Your content here"
                            multiline
                            rows={8}
                            value={content}
                            onChange={(e) => setContent(e.target.value)} />
                    </div>
                )
            }
            if (postType === 'image') {
                return <div className={classes.postBlock__textInputArea}>
                        <TextField className={classes.postBlock__dialogBoxTitleInput} 
                            // placeholder="image url"
                            value={imgUrl}
                            onChange={(e) => setImgUrl(e.target.value)}
                        />
                        <TextField className={classes.postBlock__dialogBoxContentInput} 
                            id="standard-multiline-static"
                            // placeholder="Your content here"
                            multiline
                            rows={8}
                            value={content}
                            onChange={(e) => setContent(e.target.value)} />
                    </div>
            }
            if (postType === 'quote') {
                return <div className={classes.postBlock__textInputArea}>
                        <TextField className={classes.postBlock__dialogBoxTitleInput} 
                            // placeholder='"Quote"'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextField className={classes.postBlock__dialogBoxContentInput}
                            // placeholder="- Source"
                            value={content}
                            onChange={(e) => setContent(e.target.value)} />
                    </div>
            }
        }
    }


    return (
        <div className={classes.postFooterMain}>
            <div className={classes.postFooter}>
                {/* <Tags tags={post.Tags.length ? post.Tags : []} /> */}
                <div className={classes.postFooter__likes} >
                    {numLikes} likes
                </div>
                <div className={classes.postFooter__buttons}>
                    {!(post.userId === userId) ? null :
                    <IconButton className={classes.iconButton} onClick={handleOpen}>
                            <EditIcon />
                    </IconButton>
                    }
                    <IconButton className={classes.iconButton} onClick={handleLike} >
                        {isLiked ? <Favorite /> : <FavoriteBorder />}
                    </IconButton>
                </div>
            </div>

            <Dialog open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" >
                <form className={classes.postBlock__dialogBox} onSubmit={handleSubmit}>
                    {makePostDiv()}
                    <div className={classes.postBlock__dialogBoxButtons}>
                        <Button className={classes.postBlock__dialogBoxButton} onClick={handleDelete} >
                            Delete
                        </Button>
                        <div>
                            <Button onClick={handleClose} className={classes.postBlock__dialogBoxButton}>
                                Cancel
                            </Button>
                            <Button type='submit' className={classes.postBlock__dialogBoxButton}>
                                Submit
                            </Button>
                        </div>
                    </div>
                </form>
            </Dialog>

        </div>
    )
}

export default PostFooter;