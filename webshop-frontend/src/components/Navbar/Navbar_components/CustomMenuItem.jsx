import React from "react";
import { Link } from "react-router-dom";
import { MenuItem, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

/**
 * The CustomMenuItem component is a reusable menu item that works with Material-UI's MenuItem component.
 * It is designed for use within a Material-UI Menu component and automatically applies the theme's primary contrast text color.
 *
 * @returns {JSX.Element} The JSX code for the CustomMenuItem component.
 */
const CustomMenuItem = ({ to, onClose, text }) => {
  const theme = useTheme();
  const handleClick = (e) => {
    if (onClose) {
      onClose(); // Close the menu
    }
  };

  return (
    <MenuItem component={Link} to={to} onClick={handleClick}>
      <Typography
        variant="button"
        sx={{
          color: theme.palette.primary.contrastText,
        }}
      >
        {text}
      </Typography>
    </MenuItem>
  );
};

export default CustomMenuItem;
