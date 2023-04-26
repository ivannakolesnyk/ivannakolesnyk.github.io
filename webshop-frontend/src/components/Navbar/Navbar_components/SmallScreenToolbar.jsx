import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import StyledToolbar from "./StyledToolbar";
import { MenuItem } from "@mui/material";
import { ProductsContext } from "../../../context/ProductsContext";
import { AuthContext } from "../../../context/AuthContext";

/**
 *
 * The SmallScreenToolbar component is used to display a navigation bar for small screen devices.
 * It consists of a logo and a hamburger menu icon that opens a dropdown menu with links to
 * different pages on the website, and an option to log out if the user is logged in.
 * @returns {JSX.Element} The JSX code for the SmallScreenToolbar component.
 */
const SmallScreenToolbar = () => {
  const smallCoffeeLogo = `${process.env.PUBLIC_URL}/assets/img/logos/logo_smallscreen.png`;
  const { loggedIn, handleLogout, getJwtPayload } = useContext(AuthContext);
  const { handleProductsClick } = useContext(ProductsContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  /**
   *
   * CustomMenuItem is a reusable menu item component that uses the MenuItem component from Material-UI.
   * It is designed for use within a Material-UI Menu component and provides additional customization
   * options through the to, text, and ariaLabel props.
   * @param {Object} props - The properties for the CustomMenuItem component.
   * @param {string} props.to - The destination URL/path to navigate to when the menu item is clicked.
   * @param {string} props.text - The display text for the menu item.
   * @param {string} [props.ariaLabel] - The accessible name for the menu item. Defaults to the value of text if not provided.
   * @returns {JSX.Element} The CustomMenuItem component to be rendered within a Material-UI Menu component.
   */
  const CustomMenuItem = ({ to, text, ariaLabel }) => {
    return (
      <MenuItem
        component={Link}
        to={to}
        onClick={handleClose}
        aria-label={ariaLabel || text}
      >
        {text}
      </MenuItem>
    );
  };

  return (
    <StyledToolbar>
      <Link to="/" aria-label="Home">
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
        id="menu-button"
        color="secondary"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        aria-label="Navigation menu"
      >
        <MenuIcon
          sx={{
            fontSize: "3rem",
          }}
          aria-label="Menu"
        />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "menu-button",
        }}
      >
        <CustomMenuItem to="/" text="Home" ariaLabel="Home page" />
        {loggedIn && (
          <CustomMenuItem
            to={
              getJwtPayload().roles.some(
                (role) => role.authority === "ROLE_ADMIN"
              )
                ? "/admin"
                : "/profile"
            }
            text="My account"
            ariaLabel="Access my account"
          />
        )}
        <CustomMenuItem to="/menu" text="Menu" ariaLabel="View our menu" />
        <MenuItem
          component={Link}
          to="/products"
          onClick={() => {
            handleProductsClick();
            handleClose();
          }}
        >
          Products
        </MenuItem>
        <CustomMenuItem
          to="/about"
          text="About us"
          ariaLabel="Learn more about us"
        />
        <CustomMenuItem
          to="/findus"
          text="Find us"
          ariaLabel="Find our location"
        />
        <CustomMenuItem
          to="/shoppingcart"
          text="Shopping cart"
          ariaLabel="View shopping cart"
        />
        {loggedIn ? (
          <MenuItem
            component={Link}
            to="/"
            onClick={() => {
              handleLogout();
              handleClose();
            }}
          >
            Log out
          </MenuItem>
        ) : (
          <CustomMenuItem to="/login" text="Log in" ariaLabel="Log in" />
        )}
      </Menu>
    </StyledToolbar>
  );
};

export default SmallScreenToolbar;
