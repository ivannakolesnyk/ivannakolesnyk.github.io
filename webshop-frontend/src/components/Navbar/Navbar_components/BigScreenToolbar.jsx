import React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart as ShoppingCartIcon,
  PlaceOutlined as PlaceOutlinedIcon,
  Person2Outlined as Person2OutlinedIcon,
} from "@mui/icons-material";
import coffeeLogo from "../../../assets/img/logos/logo_bigscreen.png";
import { Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import StyledToolbar from "./StyledToolbar";

/**
 * The BigScreenToolbar component displays a navigation bar for the website
 * when the screen is large. It consists of a logo, and a menu with links to different pages
 * on the website. Some with just text. Others with appropriate icons.
 * @returns {JSX.Element} The JSX code for the BigScreenToolbar component.
 */
const BigScreenToolbar = ({ onProductsClick }) => {
  /**
   * This is the where the BigScreenToolbar starts. It uses the StyledToolbar.jsx component, which
   * is also being used in the SmallScreenToolbar. Any change in the StyledToolbar will result in
   * a change for both the Big- and SmallScreenToolbar.
   */
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
          icon={<PlaceOutlinedIcon />}
        />
        <NavbarButton
          text="Log in"
          to="/login"
          icon={<Person2OutlinedIcon />}
        />
        <NavbarButton to="/profile" icon={<ShoppingCartIcon />} />
      </div>
    </StyledToolbar>
  );
};

/**
 * A custom button component that takes in `text`, `icon`, `to` and 'onClick' as props.
 * If no text or icon is provided, then icon will be set to null, and the Typography
 * constant will not be created.
 */
const NavbarButton = ({ text, icon, to, onClick }) => {
  const theme = useTheme();
  const styledIcon = icon
    ? React.cloneElement(icon, {
        sx: {
          fontSize: "2rem",
          color: theme.palette.primary.contrastText,
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
            color: theme.palette.primary.contrastText,
          }}
        >
          {text}
        </Typography>
      )}
    </Button>
  );
};

export default BigScreenToolbar;
