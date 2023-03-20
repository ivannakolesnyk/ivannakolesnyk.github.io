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
This component is rendered at the bottom of the page. It is responsive and will
show three, two or one columns with content based on screen width. 
@returns {JSX.Element} Footer component
*/
const Footer = () => {
  // Import the custom theme from theme.js
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={3}
      sx={{
        bgcolor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        p: 2,
        mt: "auto",
        justifyContent: "center",
      }}
    >
      <Grid item xs={3}></Grid>
      <Grid container sx={{ pt: 2, width: "50%" }}>
        <Grid item xs={12} md={6} lg={4} sx={{ textAlign: "center" }}>
          <Typography
            variant="body2"
            sx={{ mb: 2, display: "inline-block", textAlign: "left" }}
          >
            Find us: <br />
            <Link component={Link} to="/findus" color="inherit">
              Larsgårdsvegen 2<br />
              6009 Ålesund
              <br />
              <br />
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ textAlign: "center" }}>
          <Typography
            variant="body2"
            sx={{ mb: 2, display: "inline-block", textAlign: "left" }}
          >
            Contact information:
            <br />
            <a href="mailto:monoka@gmail.com" target="_blank" rel="noreferrer">
              monoka@gmail.com
            </a>
            <br />
            +4795746534
            <br />
            <br />
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ textAlign: "center" }}>
          <Typography
            variant="body2"
            sx={{ mb: 2, display: "inline-block", textAlign: "left" }}
          >
            Follow us:
            <br />
            <IconButton
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              align="center"
              sx={{ pl: 0, pt: 1 }}
            >
              <FacebookIcon
                sx={{
                  fontSize: "2.5rem",
                  color: theme.palette.secondary.main,
                }}
              />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              align="center"
              sx={{ pl: 0, pt: 1 }}
            >
              <InstagramIcon
                sx={{ fontSize: "2.5rem", color: theme.palette.secondary.main }}
              />
            </IconButton>
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={3}></Grid>

      <Grid item xs={3} sx={{ pt: "2rem" }}></Grid>

      <Grid item xs={6} sx={{ textAlign: "center" }}>
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 1, pb: 2, display: "inline-block", textAlign: "left" }}
        >
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

      <Grid item xs={3} sx={{ pt: "2rem" }}></Grid>
    </Grid>
  );
};

export default Footer;
