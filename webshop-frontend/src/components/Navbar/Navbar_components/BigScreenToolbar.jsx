import React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart as ShoppingCartIcon,
  PlaceOutlined as PlaceOutlinedIcon,
  Person2Outlined as Person2OutlinedIcon,
} from "@mui/icons-material";
import coffeeLogo from "../../../assets/img/logos/logo_bigscreen.png";
import StyledToolbar from "./StyledToolbar";
import NavbarButton from "./NavbarButton";

/**
 * The BigScreenToolbar component displays a navigation bar for the website
 * when the screen is large. It consists of a logo, and a menu with links to different pages
 * on the website. Some with just text. Others with appropriate icons.
 * @returns {JSX.Element} The JSX code for the BigScreenToolbar component.
 */
const leftNavItems = [
  { text: "Menu", to: "/menu" },
  { text: "Products", to: "/products" },
  { text: "About us", to: "/about" },
];

const rightNavItems = [
  { text: "Find us", to: "/findus", icon: <PlaceOutlinedIcon /> },
  { text: "Log in", to: "/login", icon: <Person2OutlinedIcon /> },
  { to: "/shoppingcart", icon: <ShoppingCartIcon /> },
];

const BigScreenToolbar = ({ onProductsClick }) => {
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
        {leftNavItems.map((item) => (
          <NavbarButton
            key={item.to}
            text={item.text}
            to={item.to}
            onClick={item.text === "Products" ? onProductsClick : undefined}
          />
        ))}
      </div>
      <div
        id="coffeeLogo"
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
        {rightNavItems.map((item) => (
          <NavbarButton
            key={item.to}
            text={item.text}
            to={item.to}
            icon={item.icon}
          />
        ))}
      </div>
    </StyledToolbar>
  );
};

export default BigScreenToolbar;
