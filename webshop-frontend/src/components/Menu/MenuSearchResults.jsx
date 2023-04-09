import { Box, Typography } from "@mui/material";
import React from "react";

const MenuSearchResults = ({
  searchTerm,
  renderMenuItems,
  filteredProducts,
}) => {
  return (
    <Box
      sx={{
        padding: "6.4rem 13.2rem",
      }}
    >
      <Typography variant="h2" mb={"2rem"} color="primary.contrastText">
        Search results
      </Typography>
      {renderMenuItems(filteredProducts)}
    </Box>
  );
};

export default MenuSearchResults;
