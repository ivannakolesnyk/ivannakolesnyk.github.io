import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu as MenuIcon } from "@mui/icons-material";
import smallCoffeeLogo from "../../../assets/img/logos/logo_smallscreen.png";
import { IconButton, Menu, styled } from "@mui/material";
import StyledToolbar from "./StyledToolbar";
import CustomMenuItem from "./CustomMenuItem";

/**
 * The SmallScreenToolbar component is used to display a navigation bar for small screen devices.
 * It consists of a logo and a hamburger menu icon that opens a dropdown menu with links to
 * different pages on the website.
 *
 * @returns {JSX.Element} The JSX code for the SmallScreenToolbar component.
 */
const SmallScreenToolbar = ({ onProductsClick }) => {
  const menuButtonRef = useRef(null);

  const [open, setOpen] = useState(false);

  const handleMenuOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      <MenuButton ref={menuButtonRef} onClick={handleMenuOpen}>
        <MenuIcon
          sx={{
            fontSize: "3rem",
          }}
        />
      </MenuButton>

      <Menu
        id="basic-menu"
        anchorEl={menuButtonRef.current}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <CustomMenuItem to="/" text="Home" onClose={handleClose} />
        <CustomMenuItem to="/menu" text="Menu" onClose={handleClose} />
        <CustomMenuItem
          to="/products"
          onClick={(e) => {
            onProductsClick();
          }}
          text="Products"
          onClose={handleClose}
        />
        <CustomMenuItem to="/about" text="About us" onClose={handleClose} />
        <CustomMenuItem to="/findus" text="Find us" onClose={handleClose} />
        <CustomMenuItem to="/login" text="Log in" onClose={handleClose} />
        <CustomMenuItem
          aria-label="shopping cart"
          to="/shoppingcart"
          text="Shopping cart"
          onClose={handleClose}
        />
      </Menu>
    </StyledToolbar>
  );
};

const MenuButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.secondary.main,
  edge: "end",
  className: "menu-button",
  ariaLabel: "small screen menu",
}));

export default SmallScreenToolbar;
