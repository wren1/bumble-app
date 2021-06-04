import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
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

import { fade, makeStyles } from '@material-ui/core/styles';
import { theme } from '../themes/Theme';
import { makeNewPost } from '../store/actions/post';

const useStyles = makeStyles((theme) => ({
    makePostContainer: {
        backgroundColor: '#fff',
        margin: '20px 0 0 0',
        width: '650px',
        height: '125px',
        display: 'flex',
        borderRadius: '5px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr'
    },
    textBox: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageBox: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    quoteBox: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
        justifyContent: 'flex-end',
        margin: '5px 5px 5px 5px',
        padding: '10px 0px 0px 0px',
    },
    postBlock__dialogBoxTitleInput: {
        height: '75px'
    }
}));

const PostBlock = () => {
    const [displayTextPost, setDisplayTextPost] = useState(false);
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [postType, setPostType] = useState(null)
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const classes = useStyles(theme);

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
        <PostBlock />
        </div>
    );
    

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(makeNewPost(title, content, postType))
        setContent('')
        setTitle('')
        setPostType(null)
        setOpen(false)
    }
    const handleOpen = (postType) => {
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
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextField className={classes.postBlock__dialogBoxContentInput} 
                            id="standard-multiline-static"
                            placeholder="Your content here"
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
                            placeholder="image url"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextField className={classes.postBlock__dialogBoxContentInput} 
                            id="standard-multiline-static"
                            placeholder="Your content here"
                            multiline
                            rows={8}
                            value={content}
                            onChange={(e) => setContent(e.target.value)} />
                    </div>
            }
            if (postType === 'quote') {
                return <div className={classes.postBlock__textInputArea}>
                        <TextField className={classes.postBlock__dialogBoxTitleInput} 
                            placeholder='"Quote"'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextField className={classes.postBlock__dialogBoxContentInput}
                            placeholder="- Source"
                            value={content}
                            onChange={(e) => setContent(e.target.value)} />
                    </div>
            }
        }
    }


    return (
        <div>
        <Grid container className={classes.makePostContainer}>

                <Grid item className={classes.textBox}>
                    <div className={classes.postBlock__makePostDiv} onClick={() => handleOpen('text')}>
                        <Icon>
                            <TextFieldsIcon className={classes.postBlock__makePostIcon} />
                        </Icon>
                    </div>
                </Grid>
                <Grid item className={classes.imageBox}>
                    <div className={classes.postBlock__makePostDiv} onClick={() => handleOpen('image')}>
                        <Icon>
                            <PhotoCameraIcon className={classes.postBlock__makePostIcon} />
                        </Icon>
                    </div>
                </Grid>
                <Grid item className={classes.quoteBox} >
                    <div className={classes.postBlock__makePostDiv} onClick={() => handleOpen('quote')}>
                        <Icon>
                            <FormatQuoteIcon className={classes.postBlock__makePostIcon} />
                        </Icon>
                    </div>
                </Grid>
        </Grid>
        <Dialog open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" >
            <form className={classes.postBlock__dialogBox} onSubmit={handleSubmit}>
                {makePostDiv()}
                <div className={classes.postBlock__dialogBoxButtons}>
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button type='submit'>
                        Submit
                    </Button>
                </div>
            </form>
        </Dialog>
        </div>
    )
}
export default PostBlock;