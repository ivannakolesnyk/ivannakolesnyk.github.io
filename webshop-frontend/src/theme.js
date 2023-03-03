import { createTheme } from "@mui/material";

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
