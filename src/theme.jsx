import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import createPalette from "@mui/material/styles/createPalette";

// TODO: Update with Estructura Palette.
const palette = createPalette({
  primary: {
    light: '#757ce8',
    main: '#3f50b5',
    dark: '#002884',
    contrastText: '#fff',
  },
  secondary: {
    light: '#ff7961',
    main: '#f44336',
    dark: '#ba000d',
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