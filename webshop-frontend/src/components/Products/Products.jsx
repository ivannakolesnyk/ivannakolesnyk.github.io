/**
 * @file Represents the Products component, which is responsible for displaying the products and
 * their respective controls, such as category selection, search, and sorting.
 * @module Products
 */

import { useTheme } from "@emotion/react";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Grid, useMediaQuery } from "@mui/material";
import { useMemo, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { MainContent } from "./Layout/MainContent";
import { Sidebar } from "./Layout/Sidebar";

/**
 * Products component that displays the list of products with filtering and sorting options.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.selectedCategory - The currently selected product category.
 * @param {boolean} props.showAllProducts - Whether to show all products or only the filtered ones.
 * @param {function} props.onCategoryClick - Callback function for when a category is clicked.
 * @returns {React.Element} The Products component.
 */
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

  // optimize the performance by memoizing the output of the filtering function
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

  const [searchTerm, setSearchTerm] = useState("");
  const displayedProducts = useMemo(() => {
    const searchFilteredProducts = searchTerm
      ? filteredProducts.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : filteredProducts;

    return showAllProducts ? productsOriginal : searchFilteredProducts;
  }, [searchTerm, showAllProducts, filteredProducts, productsOriginal]);

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
        onSearchChange={setSearchTerm}
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
