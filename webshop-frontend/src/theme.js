import { createTheme } from "@mui/material";

/**
This file exports a custom theme using createTheme function from @mui/material.
The custom theme defines the following:
Primary and Secondary color palettes.
Custom typography settings for font family, headings, and body text.
*/
export const theme = createTheme({
  palette: {
    primary: {
      //main: "#C39681" (our old main color),
      main: "#7A4647",
      contrastText: "#000",
    },
    secondary: {
      main: "#000",
      contrastText: "#FFF",
    },
  },
  typography: {
    // Set 1 rem to 10 px
    htmlFontSize: 10,
    fontFamily: "Nunito, sans-serif",
    h1: {
      fontSize: "3.2rem",
      fontFamily: "Neuton, serif",
    },
    h2: {
      fontSize: "2.6rem",
      fontFamily: "Neuton, serif",
    },
    h3: {
      fontSize: "2.2rem",
      fontFamily: "Neuton, serif",
    },
    h4: {
      fontSize: "2rem",
      fontFamily: "Neuton, serif",
    },
    h5: {
      fontSize: "1.8rem",
      fontFamily: "Neuton, serif",
    },
    h6: {
      fontSize: "1.6rem",
      fontFamily: "Neuton, serif",
    },
    primary: {
      fontFamily: "Nunito, sans-serif",
      color: "#000",
    },
    body2: {
      fontSize: "1rem",
      color: "#FFF",
      "& a": {
        color: "#FFF",
        textDecoration: "underline",
        fontFamily: "Nunito, sans-serif",
        fontSize: "1rem",
      },
      "& a:visited": {
        color: "#FFF",
      },
    },
    body1: {
      fontSize: "1.4rem",
      "& a": {
        color: "#000",
        textDecoration: "underline",
        fontFamily: "Nunito, sans-serif",
      },
      "& a:visited": {
        color: "#000",
        fontSize: "1.4rem",
      },
    },
    button: {
      fontSize: "1.2rem",
      "& a": {
        color: "#000",
        textDecoration: "underline",
        fontFamily: "Nunito, sans-serif",
        fontSize: "1.2rem",
      },
      "& a:visited": {
        color: "#000",
      },
    },
  },
});
