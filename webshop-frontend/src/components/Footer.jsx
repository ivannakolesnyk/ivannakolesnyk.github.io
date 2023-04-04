import React from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
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
  return (
    <Grid
      container
      spacing={3}
      sx={{
        bgcolor: "primary.main",
        color: "secondary.main",
        mt: "auto",
        pt: 4,
        pb: 4,
      }}
    >
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Grid container sx={{ pb: 2 }}>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "left", lg: "left" },

              pb: 1,
            }}
          >
            <Box sx={{ textAlign: "left", width: "fit-content" }}>
              <Typography variant="body2" sx={{ p: 1 }}>
                Find us: <br />
                <Link component={Link} to="/findus">
                  Larsgårdsvegen 2<br />
                  6009 Ålesund
                  <br />
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "right", lg: "center" },

              pb: 1,
            }}
          >
            <Box sx={{ textAlign: "left", width: "fit-content" }}>
              <Typography variant="body2" sx={{ p: 1 }}>
                Contact information:
                <br />
                <a
                  href="mailto:monoka@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  monoka@gmail.com
                </a>
                <br />
                +4795746534
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "left", lg: "right" },
            }}
          >
            <Box sx={{ textAlign: "left", width: "fit-content" }}>
              <Typography
                variant="body2"
                sx={{ pl: 1, pt: 1, pr: 1, pb: 0, mb: 0 }}
              >
                Follow us:
              </Typography>
              <IconButton
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon
                  sx={{
                    fontSize: "2.5rem",
                    color: "secondary.main",
                  }}
                />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon
                  sx={{
                    fontSize: "2.5rem",
                    color: "secondary.main",
                  }}
                />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}></Grid>

      <Grid item xs={3}></Grid>

      <Grid item xs={6}>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              textAlign: "left",
              p: 1,
            }}
          >
            <Typography variant="body2">
              This website is a result of a university group project, performed
              in the course{" "}
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
              . All the information provided here is a result of imagination.
              Any resemblance with real companies or products is a coincidence
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={3}></Grid>
    </Grid>
  );
};

export default Footer;
