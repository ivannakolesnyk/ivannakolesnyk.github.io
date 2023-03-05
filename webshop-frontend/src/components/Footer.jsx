import React from "react";
import { useTheme } from "@mui/material/styles";
import { Grid, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

/**
The Footer component displays the footer section of the web page.
It includes information such as the address and contact details of the business,
as well as links to social media pages.
This component is rendered at the bottom of the page.
@returns {JSX.Element} Footer component
*/
const Footer = () => {
  // Import the custom theme from theme.js
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={2}
      sx={{
        bgcolor: theme.palette.primary.main,
        p: 2,
        mt: "auto",
        justifyContent: "center",
      }}
    >
      <Grid item xs={2}></Grid>
      <Grid item xs={8 / 3}>
        <Typography variant="body2" align="center" sx={{ mb: 2 }}>
          <Link component={Link} to="/about" color="inherit">
            About us
          </Link>
        </Typography>
        <Typography variant="body2" align="center" sx={{ mb: 2 }}>
          Find us: <br />
          <Link component={Link} to="/findus" color="inherit">
            Larsgårdsvegen 2<br />
            6009 Ålesund
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={8 / 3}>
        <Typography variant="body2" align="center" sx={{ mb: 2 }}>
          Contact information:
        </Typography>
        <Typography variant="body2" align="center" sx={{ mb: 2 }}>
          <a href="mailto:monoka@gmail.com" target="_blank" rel="noreferrer">
            monoka@gmail.com
          </a>
          <br></br>
          +4795746534
        </Typography>
      </Grid>
      <Grid item xs={8 / 3}>
        <Typography variant="body2" align="center" sx={{ mb: 2 }}>
          Follow us:
        </Typography>
        <Typography variant="body2" align="center" sx={{ mb: 2 }}>
          <IconButton
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon fontSize="medium" />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon fontSize="medium" />
          </IconButton>
        </Typography>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Mocha Nooka Cafe. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center" sx={{ mt: 1 }}>
          This website is a result of a university group project, performed in
          the course{" "}
          <a
            href="https://www.ntnu.edu/studies/courses/IDATA2301#tab=omEmnet"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            IDATA2301 Web technologies
          </a>
          , at{" "}
          <a
            href="https://www.ntnu.edu/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            NTNU
          </a>
          . All the information provided here is a result of imagination. Any
          resemblance with real companies or products is a coincidence
        </Typography>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default Footer;
