import { useTheme } from "@emotion/react";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Grid, useMediaQuery } from "@mui/material";
import React, { useMemo, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";

const Products = ({ selectedCategory, showAllProducts, onCategoryClick }) => {
  // Fetching product data from API
  const { data: productsOriginal } = useFetch("products");

  const theme = useTheme();
  const isBigScreen = useMediaQuery("(min-width: 900px)");

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

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "Sale") {
      return productsOriginal.filter((product) => product.sale === true);
    }
    return selectedCategory
      ? productsOriginal.filter(
          (product) => product.category.name === selectedCategory
        )
      : productsOriginal;
  }, [selectedCategory, productsOriginal]);

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

  const buttonStyles = {
    borderRadius: "1.2rem",
    padding: "0.8rem 1.2rem",
    color: theme.palette.secondary.main,
  };

  return (
    <Grid container spacing={0}>
      <Sidebar isBigScreen={isBigScreen} onCategoryClick={onCategoryClick} />
      <MainContent
        theme={theme}
        buttonStyles={buttonStyles}
        sortButtonMenu={sortButtonMenu}
        sortAnchorEl={sortAnchorEl}
        sortSetAnchorEl={sortSetAnchorEl}
        handleSort={handleSort}
        isBigScreen={isBigScreen}
        onCategoryClick={onCategoryClick}
        sortedProducts={sortedProducts}
      />
    </Grid>
  );
};

export default Products;
