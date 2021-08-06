import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
    fontFamily: 'Arial',
    palette: {
        primary: {
            main: '#FFF259',
            dark: '#bfaf00'
        },
        secondary: {
            main: '#404040',
            light: '#a3a3a3'
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