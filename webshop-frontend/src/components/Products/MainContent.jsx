import { Grid } from "@mui/material";
import { PromoMessage } from "./PromoMessage";
import { Controls } from "./Controls";
import { ProductGrid } from "./ProductGrid";
import React from "react";

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
      />

      <ProductGrid sortedProducts={sortedProducts} />
    </Grid>
  );
};
