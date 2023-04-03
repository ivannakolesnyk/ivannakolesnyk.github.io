import React from "react";
import { Link } from "react-router-dom";
import { MenuItem, Typography } from "@mui/material";

/**
 * The CustomMenuItem component is a reusable menu item that uses the MenuItem component from MUI.
 * It is designed for use within a Material-UI Menu component and automatically applies the secondary
 * color from the theme.
 *
 * @returns {JSX.Element} The JSX code for the CustomMenuItem component.
 */
const CustomMenuItem = ({ to, text }) => {
  return (
    <MenuItem onClick={handleClose}>
      <Typography variant="button" color="secondary">
        <Link to={to}>{text}</Link>
      </Typography>
    </MenuItem>
  );
};

export default CustomMenuItem;
