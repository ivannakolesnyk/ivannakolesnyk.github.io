import React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart as ShoppingCartIcon,
  PlaceOutlined as PlaceOutlinedIcon,
  Person2Outlined as Person2OutlinedIcon,
} from "@mui/icons-material";
import coffeeLogo from "./logos/logo.png";
import { Button, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import StyledToolbar from "./StyledToolbar";

/**
The BigScreenToolbar component displays a navigation bar for the website
when the screen is large. It consists of a logo, and a menu with links to different pages 
on the website. Some with just text. Others with appropriate icons.
@returns {JSX.Element} The JSX code for the BigScreenToolbar component.
*/
const BigScreenToolbar = ({ onProductsClick }) => {
  const theme = useTheme();

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
  );
};

export default BigScreenToolbar;
