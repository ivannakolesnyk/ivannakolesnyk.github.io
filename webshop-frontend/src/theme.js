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

    extra: {
      main: "#FFFFFF",
    },
  },
  typography: {
    htmlFontSize: 10, // Set 1 rem to 10 px - must also be done with css (we set this value in index.css)
    fontFamily: "Inter, sans-serif",

    h0: {
      fontSize: "8rem",
      fontFamily: "Inter, sans-serif",
      fontWeight: "700",
    },
    h1: {
      fontSize: "7rem",
      fontFamily: "Inter, sans-serif",
      fontWeight: "700",
    },

    h2: {
      fontSize: "6rem",
      fontFamily: "Inter, sans-serif",
      fontWeight: "700",
    },
    h3: {
      fontSize: "4rem",
      fontFamily: "Inter, sans-serif",
      fontWeight: "700",
    },
    h4: {
      fontSize: "3.5rem",
      fontFamily: "Inter, sans-serif",
      fontWeight: "700",
    },
    h5: {
      fontSize: "3rem",
      fontFamily: "Inter, sans-serif",
      fontWeight: "700",
    },
    h6: {
      fontSize: "2.5rem",
      fontFamily: "Inter, sans-serif",
      fontWeight: "700",
    },
    body1: {
      fontSize: "2rem",
      fontFamily: "Inter, sans-serif",
    },
    body2: {
      fontSize: "1.5rem",
      fontFamily: "Inter, sans-serif",
    },
    button: {
      fontSize: "1.7rem",
      fontFamily: "Inter, sans-serif",
    },
  },
});
