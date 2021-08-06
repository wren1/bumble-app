import React from 'react';
import { useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../themes/Theme';


import { setCurrentSearch, setCurrentSearchType, setCurrentTag } from '../store/reducers/current';


const useStyles = makeStyles((theme) => ({
    postFooter__tag: {
        color: theme.palette.secondary.light,
        cursor: 'pointer',
        margin: '0px 3px'
    }
}))

const Tag = ({ tag }) => {
    const dispatch = useDispatch();
    const classes = useStyles(theme);

    const handleClick = () => {
        dispatch(setCurrentSearchType('tag'))
        dispatch(setCurrentTag(tag))
    }

    return (
        <div className={classes.postFooter__tag} onClick={handleClick}>
            #{ tag }
        </div>
    )
}
export default Tag;