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

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        {smallScreenSize ? (
          <IconButton
            edge="end"
            className={"menu-button"}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <>
            <div className="left-navbar-buttons">
              <Button color="inherit">Menu</Button>
              <Button color="inherit">Products</Button>
              <Button color="inherit">About us</Button>
            </div>
            <a href="/" className={"coffeeLogo"}>
              <img
                src={coffeeLogo}
                alt="Monoca logo"
                style={{ width: "auto", height: "80px" }}
              />
            </a>
            <div className={"right-navbar-buttons"}>
              <Button startIcon={<PlaceOutlinedIcon />} color="inherit">
                Find us
              </Button>
              <Button startIcon={<Person2OutlinedIcon />} color="inherit">
                Log in
              </Button>
              <IconButton color="inherit">
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
