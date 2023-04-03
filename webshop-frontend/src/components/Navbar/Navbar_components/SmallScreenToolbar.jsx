import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import smallCoffeeLogo from "../../../assets/img/logos/logo_smallscreen.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import StyledToolbar from "./StyledToolbar";
import { MenuItem, Typography } from "@mui/material";

/**
 * The SmallScreenToolbar component is used to display a navigation bar for small screen devices.
 * It consists of a logo and a hamburger menu icon that opens a dropdown menu with links to
 * different pages on the website.
 *
 * @param {function} onProductsClick - Function to call when Products menu item is clicked.
 * @param {boolean} loggedIn - Indicates whether the user is logged in or not.
 * @param {function} handleLogout - Function to call when user logs out.
 * @returns {JSX.Element} The JSX code for the SmallScreenToolbar component.
 */
const SmallScreenToolbar = ({ onProductsClick, loggedIn, handleLogout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  /**
   * The CustomMenuItem component is a reusable menu item that uses the MenuItem component from MUI.
   * It is designed for use within a Material-UI Menu component and automatically applies the secondary
   * color from the theme.
   */
  const CustomMenuItem = ({ to, text }) => {
    return (
      <MenuItem onClick={handleClose}>
        <Typography variant="button" color="secondary">
          <Link to={to} style={{ textDecoration: "none" }}>
            {text}
          </Link>
        </Typography>
      </MenuItem>
    );
  };

  return (
    <StyledToolbar>
      <Link to="/">
        <img
          src={smallCoffeeLogo}
          alt="monoca logo"
          aria-label="small monoca logo"
          style={{
            width: "auto",
            height: "3rem",
            paddingTop: "1rem",
          }}
        />
      </Link>
      <Button
        color="secondary"
        id="menu-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon
          sx={{
            fontSize: "3rem",
          }}
        />
      </Button>

      <Menu
        id="menu-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "menu-button",
        }}
      >
        <CustomMenuItem to="/" text="Home" />
        <CustomMenuItem to="/menu" text="Menu" />
        <MenuItem
          onClick={() => {
            onProductsClick();
            handleClose();
          }}
        >
          <Typography variant="button" color="secondary">
            <Link to={"/products"} style={{ textDecoration: "none" }}>
              Products
            </Link>
          </Typography>
        </MenuItem>
        <CustomMenuItem to="/about" text="About us" />
        <CustomMenuItem to="/findus" text="Find us" />
        {loggedIn ? (
          <MenuItem
            onClick={() => {
              handleLogout();
              handleClose();
            }}
          >
            <Typography variant="button" color="secondary">
              <Link to={"/"} style={{ textDecoration: "none" }}>
                Log Out
              </Link>
            </Typography>
          </MenuItem>
        ) : (
          <CustomMenuItem to="/login" text="Log in" />
        )}
        <CustomMenuItem to="/shoppingcart" text="Shopping cart" />
      </Menu>
    </StyledToolbar>
  );
};

export default SmallScreenToolbar;
