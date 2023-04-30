import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Renders a 404 error message and a button to navigate back to the home page.
 * @returns {React.Element} - The NotFound component.
 */
const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        color: "secondary.main",
      }}
    >
      <Typography
        variant="h2"
        sx={(theme) => ({ marginBottom: theme.spacing(2) })}
      >
        404 - Page Not Found
      </Typography>
      <Typography
        variant="h6"
        sx={(theme) => ({ marginBottom: theme.spacing(4) })}
      >
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoHome}>
        Go Home
      </Button>
    </Box>
  );
};

export default NotFound;
