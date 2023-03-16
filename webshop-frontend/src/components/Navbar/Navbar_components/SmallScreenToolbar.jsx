import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu as MenuIcon } from "@mui/icons-material";
import smallCoffeeLogo from "./logos/logo_smallscreen.png";
import { IconButton, Menu, MenuItem, styled, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import StyledToolbar from "./StyledToolbar";

/**
The SmallScreenToolbar component consists of a logo, and a menu with links 
to different pages on the website.
@returns {JSX.Element} The JSX code for the SmallScreenToolbar component.
*/
const SmallScreenToolbar = ({ onProductsClick }) => {
  const theme = useTheme();

  /**
This CustomMenuItem will be used often, and the use of props will make it
more efficient to use. Default value for "setOpenHamburgerMenu" is set to
"false".
*/
  const CustomMenuItem = ({
    to,
    onClick,
    text,
    theme,
    setOpenHamburgerMenu,
  }) => {
    const handleClick = (e) => {
      if (onClick) {
        onClick(e);
      }
      setOpenHamburgerMenu(false);
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

  /**
The openHamburgerMenu variable is a boolean that is true if the hamburger
menu is currently open on small screens.
It is used to control the state of the hamburger menu.
*/
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);

  /**
The menu button used for this toolbar. It uses the themes primary 
contras text as it's colors.
*/
  const MenuButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.secondary.main,
    edge: "end",
    className: "menu-button",
    "aria-label": "small screen menu",
  }));

  return (
    <StyledToolbar>
      <Link component={Link} to="/">
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
      <MenuButton onClick={(e) => setOpenHamburgerMenu(true)}>
        <MenuIcon
          sx={{
            fontSize: "3rem",
          }}
        />
      </MenuButton>

      {/* Hamburger style Menu from MUI */}
      <Menu
        style={{ position: "absolute", top: 30, right: 0 }}
        id="positioned-hamburger-menu"
        anchorEl={MenuButton}
        open={openHamburgerMenu}
        onClose={(e) => setOpenHamburgerMenu(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        getContentAnchorEl={null}
      >
        <CustomMenuItem to="/" text="Home" theme={theme} />
        <CustomMenuItem to="/menu" text="Menu" theme={theme} />
        <CustomMenuItem
          to="/products"
          onClick={(e) => {
            onProductsClick();
          }}
          text="Products"
          theme={theme}
        />
        <CustomMenuItem to="/about" text="About us" theme={theme} />
        <CustomMenuItem to="/findus" text="Find us" theme={theme} />
        <CustomMenuItem to="/login" text="Log in" theme={theme} />
        <CustomMenuItem
          aria-label="shopping cart"
          to="/shoppingcart"
          text="Shopping cart"
          theme={theme}
        />
      </Menu>
    </StyledToolbar>
  );
};

export default SmallScreenToolbar;
