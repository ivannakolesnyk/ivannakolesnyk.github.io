import React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart as ShoppingCartIcon,
  PlaceOutlined as PlaceOutlinedIcon,
  Person2Outlined as Person2OutlinedIcon,
} from "@mui/icons-material";
import coffeeLogo from "./logos/logo.png";
import { Button, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import StyledToolbar from "./StyledToolbar";

/**
 * The BigScreenToolbar component displays a navigation bar for the website
 * when the screen is large. It consists of a logo, and a menu with links to different pages
 * on the website. Some with just text. Others with appropriate icons.
 * @returns {JSX.Element} The JSX code for the BigScreenToolbar component.
 */
const BigScreenToolbar = ({ onProductsClick }) => {
  const theme = useTheme();

  /**
   * A custom button component that takes in `text`, `icon`, and `to` props.
   * Used to avoid repeating the same code over and over again.
   */
  const NavbarButton = ({ text, icon, to, onClick }) => {
    const theme = useTheme();

    return (
      <Button
        color="inherit"
        component={Link}
        to={to}
        onClick={onClick}
        startIcon={icon}
      >
        <Typography
          variant="button"
          sx={{
            color: theme.palette.primary.contrastText,
          }}
        >
          {text}
        </Typography>
      </Button>
    );
  };

  // SX prop values used for all the buttons with icons
  const COMMON_ICON_SX = {
    fontSize: "2rem",
    color: theme.palette.primary.contrastText,
  };

  return (
    <StyledToolbar>
      <div
        id="left-navbar-buttons"
        style={{
          display: "flex",
          justifyContent: "left",
          width: "33.33%",
        }}
      >
        <NavbarButton text="Menu" to="/menu" />
        <NavbarButton
          text="Products"
          to="/products"
          onClick={onProductsClick}
        />
        <NavbarButton text="About us" to="/about" />
      </div>
      <div
        id="coffeeLogo"
        component={Link}
        style={{
          display: "flex",
          justifyContent: "center",
          width: "33.33%",
        }}
      >
        <Link to="/">
          <img
            src={coffeeLogo}
            alt="Monoca logo"
            aria-label="large monoca logo"
            style={{
              width: "auto",
              height: "4.5rem",
              paddingTop: "0.5rem",
              alignContent: "left",
            }}
          />
        </Link>
      </div>
      <div
        id="right-navbar-buttons"
        style={{
          display: "flex",
          justifyContent: "right",
          width: "33.33%",
        }}
      >
        <NavbarButton
          text="Find us"
          to="/findus"
          icon={<PlaceOutlinedIcon sx={COMMON_ICON_SX} />}
        />
        <NavbarButton
          text="Log in"
          to="/login"
          icon={<Person2OutlinedIcon sx={COMMON_ICON_SX} />}
        />
        <IconButton component={Link} to="/profile">
          <ShoppingCartIcon sx={COMMON_ICON_SX} />
        </IconButton>
      </div>
    </StyledToolbar>
  );
};

export default BigScreenToolbar;
