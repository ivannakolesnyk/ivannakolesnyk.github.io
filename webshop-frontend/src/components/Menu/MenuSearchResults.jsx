import { Box, Typography } from "@mui/material";
import React from "react";

/**
 * Displays the search results in a grid layout.
 *
 * @component
 * @param {Object} props
 * @param {string} props.searchTerm - The search term used for filtering the products.
 * @param {function} props.renderMenuItems - The function responsible for rendering menu items.
 * @param {Array} props.filteredProducts - The array of filtered products based on the search term.
 */

const MenuSearchResults = ({
  searchTerm,
  renderMenuItems,
  filteredProducts,
}) => {
  return (
    <Box
      component="section"
      sx={{
        padding: {
          xs: "5.2rem 2rem",
          lg: "5.2rem 4rem",
        },
      }}
    >
      <Typography
        variant="h2"
        mb={"2rem"}
        color="primary.contrastText"
        component="header"
        aria-label="Search results"
      >
        Search results
      </Typography>
      {renderMenuItems(filteredProducts)}
    </Box>
  );
};

export default MenuSearchResults;
