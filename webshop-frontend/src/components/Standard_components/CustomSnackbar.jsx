import { Alert, Snackbar } from "@mui/material";
import React from "react";

const CustomSnackbar = ({
  open,
  onClose,
  message,
  severity = "success",
  autoHideDuration = 6000,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      role="alert"
      aria-describedby="snackbar-message"
    >
      <Alert
        onClose={onClose}
        severity={severity}
        sx={{ width: "100%" }}
        id="snackbar-message"
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
