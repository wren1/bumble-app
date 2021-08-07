import React, { useEffect, useState } from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    editPost__tags: {
        
    }
}))


const EditTags = () => {
    const classes = useStyles(theme)

    return (
        <Container className={classes.editPost__tags}>
            
        </Container>
    )
}

export default EditTags;