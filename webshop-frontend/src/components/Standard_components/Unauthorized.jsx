import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

/**
 * Renders a user-friendly messsage when non admin users tries to access restriced routes
 * @returns {React.Element} - The Unauhtorized component.
 */
const Unauhtorized = () => {
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
        textAlign: "center",
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
        Only admins can access this page!
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={(theme) => ({ marginTop: theme.spacing(2) })}
        onClick={handleBackClick}
        aria-label="Go to home page"
      >
        Go Home
      </Button>
    </Box>
  );
};

export default Unauhtorized;
