import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../themes/Theme';

import { getTagPosts } from '../store/actions/post';
import { USER_KEY } from '../store/actions/auth';
import { loadLikes } from '../store/actions/likes';

import TagResult from './TagResult';
import TagsHeader from './TagsHeader';


const useStyles = makeStyles((theme) => ({
    tagsPage__main: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    }
}))

const TagsPage = () => {
    const dispatch = useDispatch();
    const classes =useStyles(theme);
    const { tag } = useParams
    const posts = useSelector(state => state.posts)
    const likes = useSelector(state => state.likes)
    const userId = window.localStorage.getItem(USER_KEY)
    
    useEffect(() => {
        dispatch(getTagPosts(tag))
        dispatch(loadLikes(userId))
    }, [])


    
    return (
        <div className={classes.tagsPage__main}>
            <TagsHeader tag={tag} results={posts.length} />
            {!posts.length ? null : 
            posts.forEach(post => {
                return <TagResult post={post} tag={tag} key={post.id} userId={userId} likes={likes} />
            })
            }
        </div>
    )
}
export default TagsPage;