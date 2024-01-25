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
          textTransform: "capitalize",
        },
        textInfo: {
          color: "#F7F7F7",
        },
        outlinedInfo: {
          color: "#F7F7F7",
          borderColor: "#F7F7F7A0",
          "&:hover, &:focus, &:active": {
            borderColor: "#F7F7F7FF",
          },
        },
        containedInfo: {
          color: "#F7F7F7",
          backgroundColor: "#F7F7F7",
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
      fontSize: "40px",
      fontWeight: "normal",
      lineHeight: 1.2,
      fontFamily: "Cormorant Garamond, serif",
    },
    h2: {
      fontSize: "36px",
      fontWeight: "normal",
      lineHeight: 1.2,
      fontFamily: "Cormorant Garamond, serif",
    },
    h3: {
      fontSize: "32px",
      fontWeight: "normal",
      lineHeight: 1.2,
      fontFamily: "Cormorant Garamond, serif",
    },
    h4: {
      fontSize: "24px",
      fontWeight: "normal",
      lineHeight: 1.2,
      fontFamily: "Cormorant Garamond, serif",
    },
    h5: {
      fontSize: "20px",
      fontWeight: "normal",
      lineHeight: 1.2,
      fontFamily: "Cormorant Garamond, serif",
    },
    h6: {
      fontSize: "18px",
      fontWeight: "normal",
      lineHeight: 1.2,
      fontFamily: "Cormorant Garamond, serif",
    },
    body1: {
      fontSize: "14px",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "12px",
      lineHeight: 1.5,
    },
    button: {
      fontSize: "14px",
      fontWeight: "normal",
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: "12px",
      lineHeight: 1.5,
    },
  },
});

theme.typography = {
  ...theme.typography,
  h1: {
    ...theme.typography.h1,
    [theme.breakpoints.up("lg")]: {
      fontSize: "56px",
    },
  },
  h2: {
    ...theme.typography.h2,
    [theme.breakpoints.up("lg")]: {
      fontSize: "48px",
    },
  },
  h3: {
    ...theme.typography.h3,
    [theme.breakpoints.up("lg")]: {
      fontSize: "40px",
    },
  },
  h4: {
    ...theme.typography.h4,
    [theme.breakpoints.up("lg")]: {
      fontSize: "32px",
    },
  },
  h5: {
    ...theme.typography.h5,
    [theme.breakpoints.up("lg")]: {
      fontSize: "24px",
    },
  },
  h6: {
    ...theme.typography.h6,
    [theme.breakpoints.up("lg")]: {
      fontSize: "20px",
    },
  },
  body1: {
    ...theme.typography.body1,
    [theme.breakpoints.up("lg")]: {
      fontSize: "16px",
    },
  },
  body2: {
    ...theme.typography.body2,
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
  button: {
    ...theme.typography.button,
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
  },
  subtitle1: {
    ...theme.typography.subtitle1,
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
};
