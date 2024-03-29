import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "'Prompt', sans-serif",
    },
    palette: {
        secondary: {
            main: '#015352',
        },
        warningOrange: {
            main: '#f57c00'
        },
        greenNeon: {
            main: '#a3cc53'
        },
        backButton: {
            main: '#0081B4'
        },
        whiteButton:{
            main:'#fff'
        },
        mainColor:{
            main:'#ffba00'
        }
    },
});

export default theme