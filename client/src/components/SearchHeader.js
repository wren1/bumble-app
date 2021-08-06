import React from 'react';

import { makeStyles } from '@material-ui/core/styles';


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

const SearchHeader = ({ query, isTag }) => {
    const classes = useStyles()
    return (
        <div className={classes.searchHeader}>
            <div className={classes.searchHeader__content}>
                "{!isTag ? query : `#${query}`}"
            </div>
        </div>
    )
}

export default SearchHeader;