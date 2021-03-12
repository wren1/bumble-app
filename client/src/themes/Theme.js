import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
    fontFamily: 'Arial',
    palette: {
        primary: {
            main: '#FFF259'
        },
        secondary: {
            main: '#404040'
        }
    }
})

const Theme = props => {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}

export default Theme;