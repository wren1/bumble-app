import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import Icon from '@material-ui/core/Icon';

import PostModal from './PostModal';

import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../themes/Theme';


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
    postBlock__makePostDiv: {
        cursor: 'pointer',
    },
    postBlock__makePostIcon: {
        color: 'gray',
        height: '55px',
        width: '55px'
    },
}));

const PostBlock = () => {
    const dispatch = useDispatch();
    const classes = useStyles(theme);
    const [displayTextPost, setDisplayTextPost] = useState(false);
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [postType, setPostType] = useState(null)
    const [open, setOpen] = React.useState(false);

    const handleOpen = (postType) => {
        setPostType(postType);
        setOpen(true);
    }

    const handleClose = (e) => {
        setOpen(false);
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
        <PostModal 
            displayTextPost={displayTextPost} setDisplayTextPost={setDisplayTextPost} content={content} setContent={setContent} title={title} setTitle={setTitle} url={url} setUrl={setUrl} postType={postType} setPostType={setPostType} open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose}
        />
        </div>
    )
}

export default PostBlock;