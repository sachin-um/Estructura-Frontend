import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import createPalette from "@mui/material/styles/createPalette";

// TODO: Update with Estructura Palette.
const palette = createPalette({
  primary: {
    light: '#618548',
    main: '#435834',
    dark: '#304422',
    contrastText: '#fff',
  },
  secondary: {
    light: '#E7C4A0',
    main: '#AF7D51',
    dark: '#9D6432',
    contrastText: '#000',
  },
})


// TODO: Setup Theme
const theme = createTheme({
  palette: palette,
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

function EstructuraTheme(props) {
  return <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
}

export default EstructuraTheme;