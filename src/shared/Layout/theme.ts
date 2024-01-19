// export default theme;

import { createTheme } from "@mui/material/styles";
import { PaletteOptions } from "@mui/material/styles/createPalette";

// Extend the default MUI palette type to include the tertiary color
interface CustomPalette extends PaletteOptions {
  tertiary?: {
    main: string;
    dark: string;
    light: string;
    contrastText: string;
  };
}

// Create the theme
export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      // dark: "#cc0000",
      // light: "#ff3333",
      light: "#333",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#555",
      // dark: "#0056b3",
      // light: "#66a3ff",
      contrastText: "#ffffff",
    },
    tertiary: {
      main: "#00cc66", // Adjust as needed
      dark: "#008040",
      light: "#33ff99",
      contrastText: "#ffffff", // White for contrast
    },
    background: {
      default: "#f5f5f5", // Light background color
      paper: "#ffffff", // Light paper color
    },
    paper: {
      // Light paper color
      main: "#ffffff",
      dark: "#e0e0e0",
    },
  } as CustomPalette, // Type assertion to include the tertiary color
  typography: {
    fontFamily: "Poppins, sans-serif", // Modern sans-serif font
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: "1.75rem",
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: 1.6,
    },
    h6: {
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: 1.7,
    },
    body1: {
      fontSize: "1.25rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.125rem",
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    caption: {
      fontSize: "0.75rem",
      lineHeight: 1.6,
    },
    overline: {
      fontSize: "0.625rem",
      fontWeight: 700,
      letterSpacing: "0.1em",
    },
  },
});
