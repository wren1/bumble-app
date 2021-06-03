import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { login } from '../store/actions/auth';
import NavBar from './NavBar';

import { theme } from '../themes/Theme';

const useStyles = makeStyles((theme) => ({
    loginForm__main: {
        position: 'relative',
        width: '100%',
        height: '100%',
        top: '90px',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    },
    loginForm__container: {
        width: '500px',
        height: '380px',
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        // margin: '20px',
        borderRadius: '20px',
        backgroundColor: 'white',
        padding: '40px',
        boxSizing: 'border-box'

    },
    loginForm__input: {
        marginBottom: '40px',
        minWidth: '200px',
        textAlign: 'center',
        border: 'none',
        padding: '5px'
    },
    loginButton: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '10px'
    },
    loginForm__form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '20px'
    }
}))

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const classes = useStyles(theme);

    const loggedIn = useSelector(state => !!state.authentication.token);

    useEffect(() => {
        if (loggedIn) {
            window.location.href = '/';
        }
    }, [loggedIn])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    const demoLogin = () => {
        dispatch(login("demo@aa.io", "password"));
    }

    const updateEmail = (e) => {
        setEmail(e.target.value)
    }

    const updatePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <>
            <NavBar />
            <Container fixed className={classes.loginForm__main}>
                <form onSubmit={handleSubmit}>
                    <Box className={classes.loginForm__container}>
                        <div className={classes.loginForm__form} >
                            <TextField className={classes.loginForm__input} id='standard-basic' type='text' placeholder='email' value={email} onChange={updateEmail} />
                            <TextField className={classes.loginForm__input} id='standard-basic' type='password' placeholder='password' value={password} onChange={updatePassword} />
                            <div className={classes.loginButton}>
                                <Button type='submit'>Log in</Button>
                                <Button onClick={demoLogin} >Demo</Button>
                            </div>
                            <Button onClick={() => window.location.href = '/signup'}>Don't have an account yet?</Button>
                        </div>
                    </Box>
                </form>
            </Container>
        </>
    )
}
export default LoginForm;