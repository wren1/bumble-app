
import React from 'react';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import { theme } from '../themes/Theme';

const useStyles = makeStyles((theme) => ({
    searchResult: {
        padding: '2px',
        width: '200px',
        height: '200px',
        overflow: 'hidden',
        margin: '5px'
    },
    searchbar__img: {
        borderRadius: '50%'
    }
}))

const SearchResult = ({ post }) => {
    const classes = useStyles(theme);
    return (
        <Box className={classes.searchResult}>
            <h4 className={classes.searchResult__title}>{!post.title ? null : post.title}</h4>
            <div className={classes.searchResult__content}>{!post.content ? null : post.content}</div>
        </Box>
    )
}
export default SearchResult;