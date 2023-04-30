import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

/**
 * Renders a user-friendly messsage in case of an error with a button to go home.
 * @returns {React.Element} - The InternalError component.
 */
const InternalError = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
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
        variant="h4"
        sx={(theme) => ({ marginBottom: theme.spacing(3) })}
        role="heading"
        aria-level="1"
      >
        Oops! Something went wrong.
      </Typography>
      <Typography
        variant="body1"
        sx={(theme) => ({ marginBottom: theme.spacing(3) })}
      >
        We encountered an internal error. Please try again later.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={(theme) => ({ marginTop: theme.spacing(2) })}
        onClick={handleBackClick}
        aria-label="Go to Home page"
      >
        Go Home
      </Button>
    </Box>
  );
};

export default InternalError;
