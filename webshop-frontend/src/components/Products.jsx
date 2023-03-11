import React from "react";
import { Box } from "@mui/system";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import { Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const Products = () => {
  // Fetching product data from API
  const theme = useTheme();
  const products = [
    {
      id: 1,
      productName: "Coffee",
      price: 67,
      imagePath:
        "http://cdn.shopify.com/s/files/1/0548/9469/0401/products/WHOLE_2.png?v=1668467257",
    },
    {
      id: 2,
      productName: "Coffee",
      price: 67,
      imagePath:
        "http://cdn.shopify.com/s/files/1/0548/9469/0401/products/WHOLE_2.png?v=1668467257",
    },
    {
      id: 3,
      productName: "Coffee",
      price: 67,
      imagePath:
        "http://cdn.shopify.com/s/files/1/0548/9469/0401/products/WHOLE_2.png?v=1668467257",
    },
    {
      id: 4,
      productName: "Coffee",
      price: 67,
      imagePath:
        "http://cdn.shopify.com/s/files/1/0548/9469/0401/products/WHOLE_2.png?v=1668467257",
    },
    {
      id: 5,
      productName: "Coffee",
      price: 67,
      imagePath:
        "http://cdn.shopify.com/s/files/1/0548/9469/0401/products/WHOLE_2.png?v=1668467257",
    },
    {
      id: 6,
      productName: "Coffee",
      price: 67,
      imagePath:
        "http://cdn.shopify.com/s/files/1/0548/9469/0401/products/WHOLE_2.png?v=1668467257",
    },
    {
      id: 7,
      productName: "Coffee",
      price: 67,
      imagePath:
        "http://cdn.shopify.com/s/files/1/0548/9469/0401/products/WHOLE_2.png?v=1668467257",
    },
    {
      id: 8,
      productName: "Coffee",
      price: 67,
      imagePath:
        "http://cdn.shopify.com/s/files/1/0548/9469/0401/products/WHOLE_2.png?v=1668467257",
    },
    {
      id: 9,
      productName: "Coffee",
      price: 67,
      imagePath:
        "http://cdn.shopify.com/s/files/1/0548/9469/0401/products/WHOLE_2.png?v=1668467257",
    },
    {
      id: 10,
      productName: "Coffee",
      price: 67,
      imagePath:
        "http://cdn.shopify.com/s/files/1/0548/9469/0401/products/WHOLE_2.png?v=1668467257",
    },
  ];

  return (
    <Grid container spacing={0}>
      <Grid item md={2} p={4}>
        <Categories />
      </Grid>
      <Grid item md={10} p={4}>
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: theme.palette.primary.contrastText,
            padding: "10px",
            borderRadius: "8px",
            textAlign: "center",
            justifySelf: "center",
            margin: "0 auto",
            marginBottom: "0.8rem",
          }}
        >
          <Typography variant="body1">
            Awaken your senses with every sip - Experience the perfect cup of
            coffee with us!
          </Typography>
        </Box>
        <Grid container spacing={5}>
          {products.map(({ id, productName, price, imagePath }) => (
            <Grid item md={3}>
              <ProductCard
                key={id}
                productName={productName}
                price={price}
                imagePath={imagePath}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Products;
