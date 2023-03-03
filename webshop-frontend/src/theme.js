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
      main: "#C39681",
      contrastText: "#000",
    },
    secondary: {
      main: "#F3EBE5",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: "Nunito, sans-serif",
    h1: {
      fontFamily: "Neuton, serif",
    },
    h2: {
      fontFamily: "Neuton, serif",
    },
    h3: {
      fontFamily: "Neuton, serif",
    },
    h4: {
      fontFamily: "Neuton, serif",
    },
    primary: {
      fontFamily: "Nunito, sans-serif",
      color: "#000",
    },
    body2: {
      "& a": {
        color: "#000",
        textDecoration: "underline",
        fontFamily: "Nunito, sans-serif",
      },
      "& a:visited": {
        color: "#000",
      },
    },
    body1: {
      "& a": {
        color: "#000",
        textDecoration: "underline",
        fontFamily: "Nunito, sans-serif",
      },
      "& a:visited": {
        color: "#000",
      },
    },
  },
});
