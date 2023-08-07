import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import createPalette from "@mui/material/styles/createPalette";


// TODO: Update with Estructura Palette.
const palette = createPalette({
  primary: {
    light: "#618548",
    main: "#435834",
    dark: "#304422",
    contrastText: "#fff",
  },
  secondary: {
    light: "#E7C4A0",
    main: "#AF7D51",
    dark: "#9D6432",
    contrastText: "#000",
  },
});

// color design tokens export
export const tokens = {
  grey: {
    100: "#141414",
    200: "#292929",
    300: "#3d3d3d",
    400: "#525252",
    500: "#666666",
    600: "#858585",
    700: "#a3a3a3",
    800: "#c2c2c2",
    900: "#e0e0e0",
  },
  primary: {
    100: "#040509",
    200: "#080b12",
    300: "#0c101b",
    400: "#f2f0f0", // manually changed
    500: "#141b2d",
    600: "#1F2A40",
    700: "#727681",
    800: "#a1a4ab",
    900: "#d0d1d5",
  },
  greenAccent: {
    100: "#0f2922",
    150: "#435834",
    200: "#1e5245",
    300: "#2e7c67",
    400: "#3da58a",
    500: "#4cceac",
    600: "#70d8bd",
    700: "#94e2cd",
    800: "#b7ebde",
    900: "#dbf5ee",
  },
  redAccent: {
    100: "#2c100f",
    200: "#58201e",
    300: "#832f2c",
    400: "#af3f3b",
    500: "#db4f4a",
    600: "#e2726e",
    700: "#e99592",
    800: "#f1b9b7",
    900: "#f8dcdb",
  },
  blueAccent: {
    100: "#151632",
    200: "#2a2d64",
    300: "#3e4396",
    400: "#535ac8",
    500: "#6870fa",
    600: "#868dfb",
    700: "#a4a9fc",
    800: "#c3c6fd",
    900: "#e1e2fe",
  },
  brownAccent: {
    100: "#2c1e0f",
    200: "#583c1e",
    300: "#835b2d",
    400: "#af7a3c",
    500: "#db994b",
    600: "#e2b06f",
    700: "#e8c793",
    800: "#efddb7",
    900: "#f5f4db",
  },
};


// TODO: Setup Theme
const theme = createTheme({
  palette: palette,
  typography: {
    button: {
      fontFamily:[
        'Poppins',
        'sans-serif'
      ].join(','),
      textTransform: "none",
    },
  },
});



function EstructuraTheme(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default EstructuraTheme;
