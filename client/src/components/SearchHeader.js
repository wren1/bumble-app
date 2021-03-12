import React from 'react';

import { fade, makeStyles } from '@material-ui/core/styles';
import { theme } from '../themes/Theme';

const useStyles = makeStyles(() => ({
    searchHeader: {
        width: '650px',
        height: '125px',
        display: 'flex',
        borderRadius: '5px',
        justifyContent: 'center'
    },
    searchHeader__content: {
        fontSize: '50px',
        color: '#fff',
        margin: '20px',
        fontFamily: 'tahoma',
        alignSelf: 'center',
    }
}))

const SearchHeader = ({ query }) => {
    const classes = useStyles()
    return (
        <div className={classes.searchHeader}>
            <div className={classes.searchHeader__content}>
                "{query}"
            </div>
        </div>
    )
}

export default SearchHeader;