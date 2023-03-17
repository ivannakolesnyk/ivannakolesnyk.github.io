import React from "react";
import { AppBar, useMediaQuery } from "@mui/material";
import SmallScreenToolbar from "./Navbar_components/SmallScreenToolbar";
import BigScreenToolbar from "./Navbar_components/BigScreenToolbar";

/**
The Navbar component displays a navigation bar for the website.
The Navbar consists of a logo, links to different pages on the website,
and buttons for accessing user-related features like finding the store location,
logging in, and accessing the shopping cart.
The Navbar uses the MUI library to style and layout its components.
@returns {JSX.Element} The JSX code for the Navbar component.
*/
const Navbar = ({ onProductsClick }) => {
  /**
Constant used to decide if the screen is small or not
*/
  const smallScreenSize = useMediaQuery("(max-width:900px)");

  /**
This AppBar shows the Small Screen Appbar if the screen size is below
900px (medium breakpoint for Material UI), which is also the value where there 
is not enough room for all the items on the NavBar. It would generally be used 
for a tablet or a mobile phone. If it's over 900px it shows the entire
NavBar, which is meant for computer screens, tablets or larger screens.
*/
  return (
    <AppBar position="sticky">
      {smallScreenSize ? (
        <SmallScreenToolbar onProductsClick={onProductsClick} />
      ) : (
        <BigScreenToolbar onProductsClick={onProductsClick} />
      )}
    </AppBar>
  );
};

export default Navbar;
