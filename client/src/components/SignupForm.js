import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { signup, login } from '../store/actions/auth';
import NavBar from './NavBar';

import { theme } from '../themes/Theme';

const useStyles = makeStyles((theme) => ({
    signupForm__main: {
        position: 'relative',
        // margin: '0 auto',
        width: '100%',
        height: '100%',
        top: '90px',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    },
    signupForm__container: {
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
    signupForm__input: {
        marginBottom: '40px',
        minWidth: '200px',
        textAlign: 'center',
        border: 'none',
        padding: '5px'
    },
    signupForm__buttons: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '10px'
    },
    signupButton: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    signupForm__form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '20px'
    }
}))


const SignUpForm = () => {

    const classes = useStyles(theme);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const loggedIn = useSelector(state => !!state.authentication.token)

    useEffect(() => {
        if (loggedIn) {
            window.location.href = '/';
        }
    }, [loggedIn])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signup(username, email, password))
    }

    const demoLogin = () => {
        dispatch(login("demo@aa.io", "password"));
    }

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }
    const updateEmail = (e) => {
        setEmail(e.target.value);
    }
    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <>
        <NavBar />
        <Container className={classes.signupForm__main}>
            <form onSubmit={handleSubmit}>
                <Box className={classes.signupForm__container}>
                    <div className={classes.signupForm__form}>
                        <TextField className={classes.signupForm__input} type='email' placeholder='email' value={email} onChange={updateEmail} />
                        <TextField className={classes.signupForm__input} type='username' placeholder='username' value={username} onChange={updateUsername} />
                        <TextField className={classes.signupForm__input} type='password' placeholder='password' value={password} onChange={updatePassword} />
                        <div className={classes.signupForm__buttons} >
                            <Button type='submit'>Sign up</Button>
                            <Button onClick={demoLogin} >Demo</Button>
                        </div>
                        <Button onClick={() => window.location.href = '/login'}>Already have an account?</Button>
                    </div>
                    <div className={classes.signupButton}>
                    </div>
                </Box>
            </form>
        </Container>
        </>
    )
}
export default SignUpForm;