/**
 * @file Represents the Sidebar component, which is responsible for displaying the category sidebar
 * to the user.
 * @module Sidebar
 */

import { Grid } from "@mui/material";
import React from "react";
import Category from "../Category/Category";

/**
 * Sidebar component that displays the category sidebar.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {function} props.onCategoryChange - Callback function for when a category is selected.
 * @returns {React.Element} The Sidebar component.
 */
export const Sidebar = ({ isBigScreen }) => {
  if (!isBigScreen) return null;
  return (
    <Grid
      item
      sm={12}
      md={2.8}
      lg={2.2}
      xl={1.7}
      sx={{
        padding: {
          xs: "3.2rem 1.6rem 3.2rem 1.6rem",
        },
      }}
    >
      <Category />
    </Grid>
  );
};
