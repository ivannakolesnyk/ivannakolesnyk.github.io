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

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "white",
});

const Navbar = () => {
  const smallScreenSize = useMediaQuery("(max-width:800px)");

  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);

  const SmallScreenNavbar = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  });

  const MenuButton = styled(IconButton)({
    marginRight: "8px",
  });

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        {smallScreenSize ? (
          <SmallScreenNavbar>
            <Link to="/">
              <img
                src={coffeeLogo}
                alt="Monoca logo"
                style={{ width: "auto", height: "40px" }}
              />
            </Link>
            <MenuButton
              edge="end"
              className={"menu-button"}
              color="inherit"
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
              <Button color="inherit" component={Link} to="/menu">
                Menu
              </Button>
              <Button color="inherit" component={Link} to="/products">
                Products
              </Button>
              <Button color="inherit" component={Link} to="/about">
                About us
              </Button>
            </div>
            <div className="coffeeLogo">
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
