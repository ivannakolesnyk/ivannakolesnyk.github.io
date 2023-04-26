import { Box, Typography } from "@mui/material";
import React from "react";

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
