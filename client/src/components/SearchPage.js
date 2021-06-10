
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { getSearchPosts } from '../store/actions/post';

import NavBar from './NavBar';
import SearchResult from './SearchResult';
import { theme } from '../themes/Theme';

const useStyles = makeStyles((theme) => ({
    searchPage__main: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#1d1d1d'
    },
    searchpage__container: {
        position: 'relative',
        top: '50px',
        // marginTop: '30px',
    }
}));

const SearchPage = () => {
    const { query } = useParams();
    const dispatch = useDispatch();

    const classes = useStyles(theme);

    const posts = useSelector(state => state.post.posts);

    useEffect(() => {
        dispatch(getSearchPosts(query))
    }, [query])

    return (
        <div className={classes.searchPage__main}>
            <NavBar />
            <Container className={classes.searchPage__container}>
                <h1>{query}</h1>
                <Grid container className={classes.searchpage__subcontainer} >
                    {posts.length === 0 ? <h2>Sorry, no results were found.</h2> : posts.map(post => {
                        return (
                        <Grid item key={post.id}>
                        <SearchResult key={post.id} post={post} />
                        </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    )
}
export default SearchPage;