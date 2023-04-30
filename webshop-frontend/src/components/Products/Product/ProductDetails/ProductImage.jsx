import React from "react";
import { Box, Grid } from "@mui/material";

/**
 * ProductImage component displays the image of a specific product.
 * @param {Object} props - Component props
 * @param {Object} props.product - Product object containing product information
 */
function ProductImage({ product }) {
  return (
    <Grid item xs={12} sm={6}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Box
          component="img"
          src={product.product_image}
          alt={product.name}
          sx={{ width: "70%", height: "auto" }}
        />
      </Box>
    </Grid>
  );
}

export default ProductImage;
