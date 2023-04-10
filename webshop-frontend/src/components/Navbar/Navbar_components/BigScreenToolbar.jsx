import React, { useContext } from "react";
import {
  Person2Outlined as Person2OutlinedIcon,
  PlaceOutlined as PlaceOutlinedIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";
import * as PropTypes from "prop-types";
import { Link } from "react-router-dom";
import coffeeLogo from "../../../assets/img/logos/logo_bigscreen.png";
import { useCart } from "../../../context/CartContext";
import { ProductsContext } from "../../../context/ProductsContext";
import { AuthContext } from "../../../context/AuthContext";
import { AccountMenu } from "./AccountMenu";
import { AccountTooltip } from "./AccountTooltip";
import NavbarButton from "./NavbarButton";
import StyledToolbar from "./StyledToolbar";
import { Badge } from "@mui/material";

const leftNavItems = [
  { text: "Menu", to: "/menu" },
  { text: "Products", to: "/products" },
  { text: "About us", to: "/about" },
];

AccountMenu.propTypes = {
  anchorEl: PropTypes.any,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
};

AccountTooltip.propTypes = {
  onClick: PropTypes.func,
  open: PropTypes.bool,
};

/**
 *
 * The BigScreenToolbar component displays a navigation bar for the website
 * when the screen is large. It consists of a logo, and a menu with links to different pages
 * on the website. Some with just text, others with appropriate icons. If the user is logged in,
 * an account menu is shown when clicking on an avatar icon, otherwise, a "Log in" button is displayed.
 * @returns {JSX.Element} The JSX code for the BigScreenToolbar component.
 */
const BigScreenToolbar = () => {
  const { loggedIn, handleLogout } = useContext(AuthContext);
  const { handleProductsClick } = useContext(ProductsContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { cart } = useCart();

  const getTotalCartItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const rightNavItems = [
    { text: "Find us", to: "/findus", icon: <PlaceOutlinedIcon /> },
    {
      to: "/shoppingcart",
      icon: (
        <Badge
          badgeContent={getTotalCartItems()}
          color="primary"
          showZero={false}
        >
          <ShoppingCartIcon />
        </Badge>
      ),
    },
  ];

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
        {leftNavItems.map((item) => (
          <NavbarButton
            key={item.to}
            text={item.text}
            to={item.to}
            onClick={item.text === "Products" ? handleProductsClick : undefined}
          />
        ))}
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
        {rightNavItems.map((item) => (
          <NavbarButton
            key={item.to}
            text={item.text}
            to={item.to}
            icon={item.icon}
          />
        ))}
        {loggedIn ? (
          <AccountTooltip onClick={handleClick} open={open} />
        ) : (
          <NavbarButton
            text="Log in"
            to="/login"
            icon={<Person2OutlinedIcon />}
          />
        )}
        <AccountMenu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={() => {
            handleLogout();
            handleClose();
          }}
        />
      </div>
    </StyledToolbar>
  );
};

export default BigScreenToolbar;
