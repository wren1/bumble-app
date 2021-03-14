import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import HomeIcon from '@material-ui/icons/Home';
import { theme } from '../themes/Theme';


const useStyles = makeStyles((theme) => ({
    returnHome__button: {
        width: '40px',
        height: '40px',
        position: 'fixed',
        color: '#404040',
        top: '20px',
        right: '20px',
        zIndex: '8',
        cursor: 'pointer',
        backgroundColor: '#FFF259',
        borderRadius: '50%'
    },
}));

const ReturnHomeButton = () => {

    const classes = useStyles(theme);


    return (
        <SvgIcon className={classes.returnHome__button} onClick={() => window.location.href = '/'} >
            <HomeIcon />
        </SvgIcon>
    )
}


export default ReturnHomeButton;