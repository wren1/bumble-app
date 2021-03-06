import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../themes/Theme';

import Tag from './Tag';


const useStyles = makeStyles((theme) => ({
    postFooter__tags: {
        width: '100%',
        boxSizing: 'border-box',
        align: 'flex',
        padding: '3px 10px'
    }
}))

const Tags = ({ tags }) => {
    const classes = useStyles(theme);

    return (
        <div className={classes.postFooter__tags}>
            {!tags ? null : tags.forEach(tag => <Tag tag={tag} />)}
        </div>
    )
}
export default Tags;