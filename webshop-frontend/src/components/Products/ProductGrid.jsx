import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import React from "react";

export const ProductGrid = ({ sortedProducts }) => {
  return (
    <Grid container spacing={2.5}>
      {sortedProducts.map(({ id, name, price, productImage, imageAlt }) => (
        <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
          <ProductCard
            id={id}
            productName={name}
            price={price}
            imagePath={productImage}
            imageAlt={imageAlt}
            isClickable={true}
          />
        </Grid>
      ))}
    </Grid>
  );
};
