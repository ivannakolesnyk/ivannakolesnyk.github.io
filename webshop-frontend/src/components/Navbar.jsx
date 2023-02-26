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
  styled,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "white",
});

const Navbar = () => {
  const smallScreenSize = useMediaQuery("(max-width:800px)");

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
            >
              <MenuIcon />
            </MenuButton>
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
