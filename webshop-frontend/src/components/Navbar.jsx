import { Link } from "react-router-dom";
import {
  Menu as MenuIcon,
  ShoppingCart as ShoppingCartIcon,
  PlaceOutlined as PlaceOutlinedIcon,
  Person2Outlined as Person2OutlinedIcon,
} from "@mui/icons-material";
import coffeeLogo from "../assets/logo.png";
import smallCoffeeLogo from "../assets/logo_smallscreen.png";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  useMediaQuery,
  Typography,
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
const Navbar = ({ onProductsClick }) => {
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
  });

  /**
Constant used to decide if the screen is small or not
*/
  const smallScreenSize = useMediaQuery("(max-width:900px)");

  /**
The openHamburgerMenu variable is a boolean that is true if the hamburger
menu is currently open on small screens.
It is used to control the state of the hamburger menu.
*/
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);

  /**
The menu button used on small screens
*/
  const MenuButton = styled(IconButton)({});

  /**
This AppBar shows the Small Screen Appbar if the screen size is below
900px (medium breakpoint for Material UI), which is also the value where there 
is not enough room forall the text on the NavBar. It would generally be used 
for a tablet or a mobile phone. If it's over 900px it shows the entire
NavBar, which is meant for computer screens/tablets and larger screens.
*/
  return (
    <AppBar position="sticky">
      {smallScreenSize ? (
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
      ) : (
        <StyledToolbar>
          <div
            id="left-navbar-buttons"
            style={{
              display: "flex",
              justifyContent: "left",
              width: "33.33%",
            }}
          >
            <Button component={Link} to="/menu">
              <Typography
                variant="button"
                sx={{
                  color: theme.palette.primary.contrastText,
                }}
              >
                Menu
              </Typography>
            </Button>
            <Button component={Link} to="/products" onClick={onProductsClick}>
              <Typography
                variant="button"
                sx={{
                  color: theme.palette.primary.contrastText,
                }}
              >
                Products
              </Typography>
            </Button>
            <Button color="inherit" component={Link} to="/about">
              <Typography
                variant="button"
                sx={{
                  color: theme.palette.primary.contrastText,
                }}
              >
                About us
              </Typography>
            </Button>
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
            <Button
              startIcon={
                <PlaceOutlinedIcon
                  sx={{
                    fontSize: "2rem",
                    color: theme.palette.primary.contrastText,
                  }}
                />
              }
              component={Link}
              to="/findus"
              sx={{
                color: theme.palette.primary.contrastText,
              }}
            >
              <Typography
                variant="button"
                sx={{
                  color: theme.palette.primary.contrastText,
                }}
              >
                Find us
              </Typography>
            </Button>
            <Button
              startIcon={
                <Person2OutlinedIcon
                  sx={{
                    fontSize: "2rem",
                    color: theme.palette.primary.contrastText,
                  }}
                />
              }
              color="inherit"
              component={Link}
              to="/login"
            >
              <Typography
                variant="button"
                sx={{
                  color: theme.palette.primary.contrastText,
                }}
              >
                Log in
              </Typography>
            </Button>
            <IconButton component={Link} to="/profile" fontSize="small">
              <ShoppingCartIcon
                sx={{
                  fontSize: "2rem",
                  color: theme.palette.primary.contrastText,
                }}
              />
            </IconButton>
          </div>
        </StyledToolbar>
      )}
    </AppBar>
  );
};

export default Navbar;
