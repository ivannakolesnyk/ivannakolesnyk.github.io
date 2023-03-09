import { createTheme } from "@mui/material";

/**
This file exports a custom theme using createTheme function from @mui/material.
The custom theme defines the following:
Primary and Secondary color palettes, as well as contrastTexts.
Custom typography settings for font family, headings, and body text.
*/
export const theme = createTheme({
  palette: {
    primary: {
      main: "#D9E7D5",
      contrastText: "#1F3A33",
    },
    secondary: {
      main: "#1F3A33",
      contrastText: "#D9E7D5",
    },
  },
  typography: {
    htmlFontSize: 10, // Set 1 rem to 10 px - must also be done with css (we set this value in index.css)
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
    body1: {
      fontSize: "1.6rem",
    },
    body2: {
      fontSize: "1.4rem",
    },
    button: {
      fontSize: "1.6rem",
    },
  },
});
