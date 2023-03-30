import React, { useMemo, useState } from "react";
import { Box, Stack } from "@mui/system";
import Category from "./Category";
import ProductCard from "./ProductCard";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchBar from "../SearchBar";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import IconMenu from "./IconMenu";
import MobileCategory from "./MobileCategory";

let productsOriginal = [
  {
    id: 1,
    productName: "Coffee",
    sale: false,
    type: "Coffee",
    price: 67,
    imagePath: "products/coffee/coffee1-min.png",
    capacity: 350,
  },
  {
    id: 2,
    productName: "Coffee",
    sale: true,
    type: "Coffee",
    price: 100,
    imagePath: "products/coffee/coffee2-min.png",
    capacity: 350,
  },
  {
    id: 3,
    productName: "Coffee",
    sale: false,
    type: "Coffee",
    price: 40,
    imagePath: "products/coffee/coffee3-min.png",
    capacity: 350,
  },
  {
    id: 4,
    productName: "Tea",
    sale: false,
    type: "Tea",
    price: 70,
    imagePath: "products/tea/tea1-min.png",
    capacity: 350,
  },
  {
    id: 5,
    productName: "Tea",
    sale: true,
    type: "Tea",
    price: 90,
    imagePath: "products/tea/tea2-min.png",
    capacity: 350,
  },
  {
    id: 6,
    productName: "Tea",
    sale: true,
    type: "Tea",
    price: 110,
    imagePath: "products/tea/tea3-min.png",
    capacity: 350,
  },
  {
    id: 7,
    productName: "Tea",
    sale: false,
    type: "Tea",
    price: 140,
    imagePath: "products/tea/tea4-min.png",
    capacity: 350,
  },
  {
    id: 8,
    productName: "Coffee",
    type: "Coffee",
    sale: true,
    price: 99,
    imagePath: "products/coffee/coffee4-min.png",
    capacity: 350,
  },
  {
    id: 9,
    productName: "Coffee",
    type: "Coffee",
    sale: true,
    price: 99,
    imagePath: "products/coffee/coffee5-min.png",
    capacity: 350,
  },
];

const Products = ({ selectedCategory, showAllProducts, onCategoryClick }) => {
  // Fetching product data from API
  const theme = useTheme();
  const isBigScreen = useMediaQuery("(min-width: 900px)");
  const buttonStyles = {
    borderRadius: "1.2rem",
    padding: "0.8rem 1.2rem",
    color: theme.palette.secondary.main,
  };

  const sortButtonMenu = [
    {
      name: "Ascending",
      icon: () => <TrendingUpIcon />,
    },
    {
      name: "Descending",
      icon: () => <TrendingDownIcon />,
    },
  ];

  let filteredProducts = selectedCategory
    ? productsOriginal.filter((product) => product.type === selectedCategory)
    : productsOriginal;

  if (selectedCategory === "Sale") {
    filteredProducts = productsOriginal.filter(
      (product) => product.sale === true
    );
  }

  const displayedProducts = showAllProducts
    ? productsOriginal
    : filteredProducts;

  const [sortDirection, setSortDirection] = useState(null);

  const sortedProducts = useMemo(() => {
    const sorted = [...displayedProducts];
    if (sortDirection === "asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortDirection === "desc") {
      sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
  }, [displayedProducts, sortDirection]);

  const handleSort = (direction) => {
    setSortDirection(direction);
  };

  const [sortAnchorEl, sortSetAnchorEl] = useState(null);

  return (
    <Grid container spacing={0}>
      {isBigScreen ? (
        <Grid item sm={12} md={2.5} lg={2} xl={1.7} p={4}>
          <Category onCategoryChange={onCategoryClick} />
        </Grid>
      ) : null}

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
          <Typography
            sx={{
              fontSize: {
                xs: "1.4rem",
                sm: "1.6rem",
                md: "1.8rem",
                lg: "2rem",
                xl: "2.2rem",
              },
            }}
          >
            Awaken your senses with every sip - Experience the perfect cup of
            coffee with us!
          </Typography>
        </Box>

        <Stack
          direction={"row"}
          columnGap={"1rem"}
          sx={{
            marginBottom: { xs: "1rem", sm: "1rem", md: "3.2rem" },
          }}
        >
          <Button
            variant="outlined"
            color="secondary"
            aria-haspopup="true"
            aria-controls="menu"
            sx={buttonStyles}
            onClick={(event) => {
              sortSetAnchorEl(event.currentTarget);
            }}
          >
            <FilterListIcon sx={{ paddingRight: "0.5rem" }} />
            <Typography variant="button">Sort</Typography>
          </Button>
          <IconMenu
            menuItems={sortButtonMenu}
            anchorEl={sortAnchorEl}
            setAnchorEl={sortSetAnchorEl}
            handleSort={handleSort}
          />

          <SearchBar />
        </Stack>

        {!isBigScreen ? (
          <Box mb={1}>
            <MobileCategory onCategoryChange={onCategoryClick} />
          </Box>
        ) : null}

        <Grid container spacing={2.5}>
          {sortedProducts.map(
            ({ id, productName, price, imagePath, capacity }) => (
              <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
                <ProductCard
                  productName={productName}
                  price={price}
                  capacity={capacity}
                  imagePath={imagePath}
                />
              </Grid>
            )
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Products;
