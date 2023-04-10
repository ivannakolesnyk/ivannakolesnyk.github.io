import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

/**
 *
 * A custom button component that takes in `text`, `icon`, `to` and 'onClick' as props.
 * If no text or icon is provided, then icon will be set to null, and the Typography
 * constant will not be created.
 * @returns {JSX.Element} The JSX code for the CustomMenuItem component.
 */
const NavbarButton = ({ text, icon, to, onClick }) => {
  const styledIcon = icon
    ? React.cloneElement(icon, {
        sx: {
          fontSize: "2rem",
          color: "secondary.main",
        },
      })
    : null;

  return (
    <Button
      color="inherit"
      component={Link}
      to={to}
      onClick={onClick}
      startIcon={styledIcon}
    >
      {text && (
        <Typography
          variant="button"
          sx={{
            color: "secondary.main",
          }}
        >
          {text}
        </Typography>
      )}
    </Button>
  );
};

export default NavbarButton;
