import React from "react";
import { Box, Stack } from "@mui/system";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import { Button, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import FilterListIcon from "@mui/icons-material/FilterList";
import TuneIcon from "@mui/icons-material/Tune";

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

  const StyledButton = styled(Button)({
    borderRadius: "1.2rem",
    padding: "0.8rem 1.2rem",
    color: theme.palette.secondary.main,
  });

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

        <Stack
          direction={"row"}
          columnGap={"1rem"}
          sx={{
            marginBottom: 4,
          }}
        >
          <StyledButton variant="outlined" color="secondary">
            <FilterListIcon sx={{ paddingRight: "0.5rem" }} />
            <Typography variant="button">Sort</Typography>
          </StyledButton>

          <StyledButton variant="outlined" color="secondary">
            <TuneIcon sx={{ paddingRight: "0.5rem" }} />
            <Typography variant="button">Filter</Typography>
          </StyledButton>
        </Stack>

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
