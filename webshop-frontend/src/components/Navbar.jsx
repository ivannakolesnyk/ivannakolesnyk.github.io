import { Link } from "react-router-dom";
import {
  Menu as MenuIcon,
  ShoppingCart as ShoppingCartIcon,
  PlaceOutlined as PlaceOutlinedIcon,
  Person2Outlined as Person2OutlinedIcon,
} from "@mui/icons-material";
import coffeeLogo from "../assets/logo.png";
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

  const smallScreenSize = useMediaQuery("(max-width:980px)");

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
This AppBar shows the Small Screen Appbar if the screen size is below
980 px, which is the value where there is not enough room for
all the text on the NavBar. It would generally be used for a
tablet or a mobile phone. If it's over 980 px it shows the entire
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
                style={{
                  width: "auto",
                  height: "40px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
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
                onClick={(e) => setOpenHamburgerMenu(false)}
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
          </SmallScreenNavbar>
        ) : (
          <>
            <div
              id="left-navbar-buttons"
              style={{
                display: "flex",
                justifyContent: "left",
                width: "33.33%",
              }}
            >
              <StyledButton color="inherit" component={Link} to="/menu">
                <Typography
                  variant="button"
                  sx={{
                    color: theme.palette.primary.contrastText,
                  }}
                >
                  Menu
                </Typography>
              </StyledButton>
              <Button component={Link} to="/products">
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
                  style={{
                    width: "auto",
                    height: "60px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
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
                startIcon={<PlaceOutlinedIcon />}
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
                startIcon={<Person2OutlinedIcon />}
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
              <IconButton component={Link} to="/shoppingcart" fontSize="small">
                <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
              </IconButton>
            </div>
          </>
        )}
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
