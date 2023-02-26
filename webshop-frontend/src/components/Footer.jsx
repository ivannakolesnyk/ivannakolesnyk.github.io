import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Link, Typography } from "@mui/material";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.primary.main,
        color: theme.palette.secondary.contrastText,
        p: 2,
        mt: "auto",
      }}
    >
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} Mocha Nooka Cafe. All rights reserved.
      </Typography>
      <Typography variant="body2" align="center" sx={{ mt: 1 }}>
        This website is a result of a university group project, performed in the
        course{" "}
        <Link
          href="https://www.ntnu.edu/studies/courses/IDATA2301#tab=omEmnet"
          target="_blank"
          rel="noopener"
          sx={{ color: theme.palette.secondary.contrastText }}
        >
          IDATA2301 Web technologies
        </Link>
        , at{" "}
        <Link
          href="https://www.ntnu.edu/"
          target="_blank"
          rel="noopener"
          sx={{ color: theme.palette.secondary.contrastText }}
        >
          NTNU
        </Link>
        . All the information provided here is a result of imagination. Any
        resemblance with real companies or products is a coincidence
      </Typography>
    </Box>
  );
};

export default Footer;
