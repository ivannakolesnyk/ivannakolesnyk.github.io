import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu as MenuIcon } from "@mui/icons-material";
import smallCoffeeLogo from "./logos/logo_smallscreen.png";
import { IconButton, Menu, MenuItem, styled, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import StyledToolbar from "./StyledToolbar";

/**
The SmallScreenToolbar component displays a navigation bar for the website.
It consists of a logo, and a menu with links to different pages 
on the website.
@returns {JSX.Element} The JSX code for the SmallScreenToolbar component.
*/
const SmallScreenToolbar = ({ onProductsClick }) => {
  const theme = useTheme();

  /**
The openHamburgerMenu variable is a boolean that is true if the hamburger
menu is currently open on small screens.
It is used to control the state of the hamburger menu.
*/
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);

  /**
The menu button used on in this
*/
  const MenuButton = styled(IconButton)({});

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
      <MenuButton
        edge="end"
        className={"menu-button"}
        color="#fff"
        aria-label="small screen menu"
        onClick={(e) => setOpenHamburgerMenu(true)}
      >
        <MenuIcon
          sx={{
            color: theme.palette.secondary.main,
            fontSize: "3rem",
          }}
        />
      </MenuButton>
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
        <MenuItem
          key="home"
          component={Link}
          to="/"
          onClick={(e) => setOpenHamburgerMenu(false)}
        >
          <Typography
            variant="button"
            sx={{
              color: theme.palette.primary.contrastText,
            }}
          >
            Home
          </Typography>
        </MenuItem>
        <MenuItem
          key="menu"
          component={Link}
          to="/menu"
          onClick={(e) => setOpenHamburgerMenu(false)}
        >
          <Typography
            variant="button"
            sx={{
              color: theme.palette.primary.contrastText,
            }}
          >
            Menu
          </Typography>
        </MenuItem>
        <MenuItem
          key="products"
          component={Link}
          to="/products"
          onClick={(e) => {
            setOpenHamburgerMenu(false);
            onProductsClick();
          }}
        >
          <Typography
            variant="button"
            sx={{
              color: theme.palette.primary.contrastText,
            }}
          >
            Products
          </Typography>
        </MenuItem>
        <MenuItem
          key="about"
          component={Link}
          to="/about"
          onClick={(e) => setOpenHamburgerMenu(false)}
        >
          <Typography
            variant="button"
            sx={{
              color: theme.palette.primary.contrastText,
            }}
          >
            About us
          </Typography>
        </MenuItem>
        <MenuItem
          key="findus"
          component={Link}
          to="/findus"
          onClick={(e) => setOpenHamburgerMenu(false)}
        >
          <Typography
            variant="button"
            sx={{
              color: theme.palette.primary.contrastText,
            }}
          >
            Find us
          </Typography>
        </MenuItem>
        <MenuItem
          key="login"
          component={Link}
          to="/login"
          onClick={(e) => setOpenHamburgerMenu(false)}
        >
          <Typography
            variant="button"
            sx={{
              color: theme.palette.primary.contrastText,
            }}
          >
            Log in
          </Typography>
        </MenuItem>
        <MenuItem
          key="shoppingcart"
          aria-label="shopping cart"
          component={Link}
          to="/shoppingcart"
          onClick={(e) => setOpenHamburgerMenu(false)}
        >
          <Typography
            variant="button"
            sx={{
              color: theme.palette.primary.contrastText,
            }}
          >
            Shopping cart
          </Typography>
        </MenuItem>
      </Menu>
    </StyledToolbar>
  );
};

export default SmallScreenToolbar;
