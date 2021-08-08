import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';

import EditTags from './EditTags';

import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../themes/Theme';
import { makeNewPost } from '../store/actions/post';


const useStyles = makeStyles((theme) => ({

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
    
}))


const PostModal = ({ content, setContent, title, setTitle, postType, setPostType, open, setOpen, handleClose }) => {
    const dispatch = useDispatch();
    const classes = useStyles(theme)

    const [tags, setTags] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(makeNewPost(title, content, postType, tags))
        setContent('')
        setTitle('')
        setPostType(null)
        setOpen(false)
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
    )
}

export default PostModal;