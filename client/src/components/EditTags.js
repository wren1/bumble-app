import React, { useEffect, useState } from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import { theme } from '../themes/Theme';

const useStyles = makeStyles((theme) => ({
    postModal__tags: {
        
    }
}))


const EditTags = () => {
    const classes = useStyles(theme)

    return (
        <Container className={classes.postModal__tags}>
            
        </Container>
    )
}

export default EditTags;