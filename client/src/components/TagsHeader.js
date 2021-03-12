import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fade, makeStyles } from '@material-ui/core/styles';
import { theme } from '../themes/Theme';
// import classes from '*.module.css';


const useStyles = makeStyles((theme) => ({
    tagsPage__header: {
        backgroundColor: 'white'
    },
    tagsPage__tag: {

    },
    tagsPage__resNumber: {
        
    }
}))
const TagsHeader = ({ results, tag }) => {
    const classes = useStyles(theme)

    return (
        <div className={classes.tagsPage__header}>
            <div className={classes.tagsPage__tag}>
                "{tag}"
            </div>
            <div className={classes.tagsPage__resNumber}>
                {results} results
            </div>
        </div>
    )
}
export default TagsHeader;