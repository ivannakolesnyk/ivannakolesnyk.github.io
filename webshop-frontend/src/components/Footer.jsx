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
      <Grid item xs={4.5}></Grid>
      <Grid container xs={4}>
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="body2" align="left" sx={{ mb: 2 }}>
            <Link component={Link} to="/about" color="inherit">
              About us
            </Link>
          </Typography>
          <Typography variant="body2" align="left" sx={{ mb: 2 }}>
            Find us: <br />
            <Link component={Link} to="/findus" color="inherit">
              Larsgårdsvegen 2<br />
              6009 Ålesund
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="body2" align="left" sx={{ mb: 2 }}>
            Contact information:
          </Typography>
          <Typography variant="body2" align="left" sx={{ mb: 2 }}>
            <a href="mailto:monoka@gmail.com" target="_blank" rel="noreferrer">
              monoka@gmail.com
            </a>
            <br></br>
            +4795746534
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ pb: 0 }}>
          <Typography variant="body2" align="left" sx={{ mb: 2 }}>
            Follow us:
          </Typography>
          <IconButton
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            align="left"
            sx={{ pl: 0, pt: 0 }}
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
            align="left"
            sx={{ pl: 0, pt: 0 }}
          >
            <InstagramIcon
              sx={{ fontSize: "2.5rem", color: theme.palette.secondary.main }}
            />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item xs={3.5}></Grid>

      <Grid item xs={4.5} sx={{ pt: "2rem" }}></Grid>
      <Grid container xs={4} sx={{ pt: "2rem" }}>
        <Grid item xs={12}>
          <Typography variant="body2" align="left" sx={{ mt: 1, pb: 2 }}>
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
      </Grid>
      <Grid item xs={3.5} sx={{ pt: "2rem" }}></Grid>
    </Grid>
  );
};

export default Footer;
