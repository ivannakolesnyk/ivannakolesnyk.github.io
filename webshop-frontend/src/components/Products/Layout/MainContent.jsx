/**
 * @file Represents the MainContent component, which is responsible for displaying the main content
 * area, including the promotional message, controls, and product grid.
 * @module MainContent
 */

import { Grid } from "@mui/material";
import { PromoMessage } from "./PromoMessage";
import { Controls } from "../Controls/Controls";
import { ProductGrid } from "../Product/ProductGrid";
import React from "react";

/**
 * MainContent component that displays the main content area with the promotional message, controls,
 * and product grid.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.theme - The theme object from Material-UI.
 * @param {Object} props.buttonStyles - The styles for the sort button.
 * @param {Array} props.sortButtonMenu - The sort button menu items.
 * @param {React.Element} props.sortAnchorEl - The anchor element for the sort menu.
 * @param {function} props.sortSetAnchorEl - Callback function for setting the sort menu anchor element.
 * @param {function} props.handleSort - Callback function for handling the sort action.
 * @param {boolean} props.isBigScreen - Whether the current screen size is considered big.
 * @param {function} props.onCategoryClick - Callback function for when a category is clicked.
 * @param {Array} props.sortedProducts - The array of sorted products.
 * @returns {React.Element} The MainContent component.
 */
export const MainContent = ({
  theme,
  buttonStyles,
  sortButtonMenu,
  sortAnchorEl,
  sortSetAnchorEl,
  handleSort,
  isBigScreen,
  onCategoryClick,
  sortedProducts,
  onSearchChange,
}) => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={9.5}
      lg={10}
      xl={10.3}
      sx={{
        padding: {
          xs: "3.2rem 1.6rem 3.2rem 1.5rem",
        },
      }}
    >
      <PromoMessage theme={theme} />

      <Controls
        buttonStyles={buttonStyles}
        sortButtonMenu={sortButtonMenu}
        sortAnchorEl={sortAnchorEl}
        sortSetAnchorEl={sortSetAnchorEl}
        handleSort={handleSort}
        isBigScreen={isBigScreen}
        onCategoryClick={onCategoryClick}
        onSearchChange={onSearchChange}
      />

      <ProductGrid sortedProducts={sortedProducts} />
    </Grid>
  );
};
