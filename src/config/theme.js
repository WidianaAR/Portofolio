import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: 'rgba(199,235,255,1)',
            light: '#42a5f5',
            dark: '#1565c0',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#dc004e',
            light: '#ff4081',
            dark: '#9a0036',
            contrastText: '#ffffff',
        },
        background: {
            default: '#e3f4ff',
            paper: '#ffffff',
        },
        text: {
            primary: '#19455b',
            secondary: '#2f586f',
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
            light: '#e3f2fd',
            dark: '#42a5f5',
        },
        secondary: {
            main: '#f48fb1',
            light: '#fce4ec',
            dark: '#f06292',
        },
        background: {
            default: '#0e0920',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#fff',
            secondaryD: 'rgba(229, 224, 255, 0.5)',
            secondaryL: 'rgba(229, 224, 255, 0.7)',
        },
    },
    typography: lightTheme.typography,
    shape: lightTheme.shape,
    components: lightTheme.components,
});

export { lightTheme, darkTheme };