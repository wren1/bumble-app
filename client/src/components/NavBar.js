import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import { logout } from '../store/actions/auth';
import { theme } from '../themes/Theme';
import { setCurrentSearch, setCurrentSearchType } from '../store/reducers/current';

const useStyles = makeStyles((theme) => ({
    navbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    navbar__logoAndSearch: {
        display: 'flex',
        alignItems: 'center'
    },
    navbar__logo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    },
    searchBar: {
        display: 'flex',
        marginLeft: '100px',
        width: '500px'
    },
    searchBar__input: {
        backgroundColor: '#fff',
        borderRadius: '0px 6px 6px 0px',
        width: '400px',
        paddingLeft: '15px'
    },
    navbar__searchIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: '6px 0px 0px 6px',
        padding: '5px'
    },
    logoutButton: {
        justify: 'flex-end'
    }
}));

const NavBar = () => {

    const dispatch = useDispatch();
    const classes = useStyles(theme);

    const [searchInput, setsearchInput] = useState('');

    const handleLogoutClick = () => {
        dispatch(logout());
        window.location.href = '/login';
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setCurrentSearchType('query'))
        dispatch(setCurrentSearch(searchInput))
    }

    const loggedIn = useSelector((state) => !!state.authentication.token)
    return (
        <div>
            <AppBar position='static'>
                <Toolbar color='#000' className={classes.navbar}>
                    <div className={classes.navbar__logoAndSearch}>
                        <div className={classes.navbar__logo}>
                            <Typography onClick={() => window.location.href='/'} edge='start' variant='h6'>
                                Bumble
                            </Typography>
                        </div>
                        <form onSubmit={handleSubmit} className={classes.searchBar}>
                            <div className={classes.navbar__searchIcon} >
                                <SearchIcon />
                            </div>
                            <InputBase onChange={(e) => setsearchInput(e.target.value)} className={classes.searchBar__input} placeholder='Search...' />
                        </form>
                    </div>
                    { loggedIn ? <Button className={classes.logoutButton} edge='end' onClick={handleLogoutClick} variant='contained' color='secondary'>Logout</Button>: null }
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;