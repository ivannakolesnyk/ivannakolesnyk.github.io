import { Alert, Snackbar } from "@mui/material";
import React from "react";

/**
 * Renders a Snackbar with a customizable Alert message.
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} props.open - The state of the Snackbar (open or closed).
 * @param {Function} props.onClose - The callback function to handle the closing of the Snackbar.
 * @param {string} props.message - The message to be displayed in the Alert.
 * @param {string} [props.severity="success"] - The severity of the Alert (e.g. "success", "error", "warning", "info").
 * @param {number} [props.autoHideDuration=6000] - The time in milliseconds for the Snackbar to auto-hide.
 * @returns {React.Element} - The CustomSnackbar component.
 */
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
