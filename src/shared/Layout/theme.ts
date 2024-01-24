import { createTheme } from "@mui/material/styles";

const buttonTextStyle = {
  transition: "all .2s ease-in-out",
  "&:hover": {
    background: "transparent",
    color: "#867869",
    textDecoration: "underline",
  },
};
// Create the theme
export const theme = createTheme({
  components: {
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: buttonTextStyle,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "8px 20px",
        },
        text: {
          transition: "text-decoration .5s ease-in-out",
          "&:hover, &:focus, &:active": {
            background: "transparent",
            color: "#867869",
            textDecoration: "underline",
          },
        },
      },
    },
  },
  palette: {
    secondary: {
      main: "#E8D8C8",
      dark: "#867869",
      light: "#cabaab",
      contrastText: "#333333",
    },
    primary: {
      main: "#333333",
      contrastText: "#ffffff",
    },
    background: {
      default: "#F7F7F7", // Light background color
      paper: "#ffffff", // Light paper color
    },
  }, // Type assertion to include the tertiary color
  typography: {
    fontFamily: "Quattrocento, serif", // Modern sans-serif font
    h1: {
      fontSize: "56px",
      fontWeight: "bold",
      lineHeight: 1.2,
      fontFamily: "Cormorant Garamond, serif",
    },
    h2: {
      fontSize: "48px",
      fontWeight: "bold",
      lineHeight: 1.2,
      fontFamily: "Cormorant Garamond, serif",
    },
    h3: {
      fontSize: "40px",
      fontWeight: "bold",
      lineHeight: 1.2,
      fontFamily: "Cormorant Garamond, serif",
    },
    h4: {
      fontSize: "32px",
      fontWeight: "bold",
      lineHeight: 1.2,
      fontFamily: "Cormorant Garamond, serif",
    },
    h5: {
      fontSize: "40px",
      fontWeight: "bold",
      lineHeight: 1.2,
      fontFamily: "Cormorant Garamond, serif",
    },
    body1: {
      fontSize: "16px",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "14px",
      lineHeight: 1.5,
    },
    button: {
      fontSize: "16px",
      fontWeight: "normal",
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: "14px",
      lineHeight: 1.5,
    },
  },
});
