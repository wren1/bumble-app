import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import { theme } from '../themes/Theme';


const useStyles = makeStyles((theme) => ({
    returnHome__button: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    },
}));

const ReturnHomeButton = () => {

    const classes = useStyles(theme);


    return (
        <div className={classes.returnHome__button}>
            
        </div>
    )
}


export default ReturnHomeButton;