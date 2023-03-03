import { Link } from "react-router-dom";
import {
  Menu as MenuIcon,
  ShoppingCart as ShoppingCartIcon,
  PlaceOutlined as PlaceOutlinedIcon,
  Person2Outlined as Person2OutlinedIcon,
} from "@mui/icons-material";
import coffeeLogo from "../assets/coffeeLogo.jpg";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";

/**
The Navbar component displays a navigation bar for the website.
The Navbar consists of a logo, links to different pages on the website,
and buttons for accessing user-related features like finding the store location,
logging in, and accessing the shopping cart.
The Navbar uses the MUI library to style and layout its components.
@returns {JSX.Element} The JSX code for the Navbar component.
*/
const Navbar = () => {
  // Import the custom theme from theme.js
  const theme = useTheme();

  /**
The StyledToolbar component is a styled version of the MUI Toolbar component.
It is used to display the Navbar's contents in a way that is visually
appealing and responsive to different screen sizes.
*/
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
    color: theme.palette.primary.contrastText,
    "& .MuiSvgIcon-root": {
      color: theme.palette.primary.contrastText,
    },
    "& button": {
      color: theme.palette.primary.contrastText,
    },
  });

  const smallScreenSize = useMediaQuery("(max-width:800px)");

  /**
The openHamburgerMenu variable is a boolean that is true if the hamburger
menu is currently open on small screens.
It is used to control the state of the hamburger menu.
*/
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);

  /**
The SmallScreenNavbar component is a styled div that contains the
contents of the Navbar on small screens.
It is used to display the Navbar's contents in a way that is visually
appealing and responsive to small screens.
*/
  const SmallScreenNavbar = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  });

  const MenuButton = styled(IconButton)({
    marginRight: "8px",
  });

  const StyledButton = styled(Button)({
    color: "black",
  });

  /**
This AppBar show the Small Screen Appbar if the screen size is below
800 px, which is the value where there is not enough room for
all the text on the NavBar. It would generally be used for a
tablet or a mobile phone. If it's over 800 px it shows the entire
NavBar, which is meant for computer screens and larger screens.
*/
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        {smallScreenSize ? (
          <SmallScreenNavbar>
            <Link component={Link} to="/">
              <img
                src={coffeeLogo}
                alt="Monoca logo"
                style={{ width: "auto", height: "40px" }}
              />
            </Link>
            <MenuButton
              edge="end"
              className={"menu-button"}
              color="#fff"
              aria-label="menu"
              onClick={(e) => setOpenHamburgerMenu(true)}
            >
              <MenuIcon />
            </MenuButton>
            <Menu
              style={{ position: "absolute", top: 30, right: 0 }}
              id="positioned-hamburger-menu"
              aria-labelledby="positioned-hamburger-menu"
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
                Home
              </MenuItem>
              <MenuItem
                key="menu"
                component={Link}
                to="/menu"
                onClick={(e) => setOpenHamburgerMenu(false)}
              >
                Menu
              </MenuItem>
              <MenuItem
                key="products"
                component={Link}
                to="/products"
                onClick={(e) => setOpenHamburgerMenu(false)}
              >
                Products
              </MenuItem>
              <MenuItem
                key="about"
                component={Link}
                to="/about"
                onClick={(e) => setOpenHamburgerMenu(false)}
              >
                About us
              </MenuItem>
              <MenuItem
                key="findus"
                component={Link}
                to="/findus"
                onClick={(e) => setOpenHamburgerMenu(false)}
              >
                Find us
              </MenuItem>
              <MenuItem
                key="login"
                component={Link}
                to="/login"
                onClick={(e) => setOpenHamburgerMenu(false)}
              >
                Log in
              </MenuItem>
              <MenuItem
                key="shoppingcart"
                component={Link}
                to="/shoppingcart"
                onClick={(e) => setOpenHamburgerMenu(false)}
              >
                Shopping cart
              </MenuItem>
            </Menu>
          </SmallScreenNavbar>
        ) : (
          <>
            <div className="left-navbar-buttons">
              <StyledButton color="inherit" component={Link} to="/menu">
                Menu
              </StyledButton>
              <Button color="inherit" component={Link} to="/products">
                Products
              </Button>
              <Button color="inherit" component={Link} to="/about">
                About us
              </Button>
            </div>
            <div className="coffeeLogo" component={Link}>
              <Link to="/">
                <img
                  src={coffeeLogo}
                  alt="Monoca logo"
                  style={{ width: "auto", height: "80px" }}
                />
              </Link>
            </div>
            <div className={"right-navbar-buttons"}>
              <Button
                startIcon={<PlaceOutlinedIcon />}
                color="inherit"
                component={Link}
                to="/findus"
              >
                Find us
              </Button>
              <Button
                startIcon={<Person2OutlinedIcon />}
                color="inherit"
                component={Link}
                to="/login"
              >
                Log in
              </Button>
              <IconButton color="inherit" component={Link} to="/shoppingcart">
                <ShoppingCartIcon />
              </IconButton>
            </div>
          </>
        )}
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
