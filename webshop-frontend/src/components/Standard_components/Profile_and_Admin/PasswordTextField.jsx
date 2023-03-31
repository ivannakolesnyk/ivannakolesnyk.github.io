import { TextField } from "@mui/material";
import React from "react";

/**
 PasswordTextField is a custom React functional component that wraps the TextField
 component from the Material-UI library. The purpose of this component is to simplify
 and reuse code for password input fields in forms, with a consistent look and feel.
 */
export const PasswordTextField = ({ label, value, setValue, ...props }) => (
  <TextField
    fullWidth
    label={label}
    margin="normal"
    type="password"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    {...props}
  />
);
