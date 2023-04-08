/**
 * @file Represents the Products component, which is responsible for displaying the products and
 * their respective controls, such as category selection, search, and sorting.
 * @module Products
 */

import { useTheme } from "@emotion/react";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Grid, useMediaQuery } from "@mui/material";
import { useContext, useMemo, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { MainContent } from "./Layout/MainContent";
import { Sidebar } from "./Layout/Sidebar";
import { ProductsContext } from "../../context/ProductsContext";

/**
 * Products component that displays the list of products with filtering and sorting options.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.selectedCategory - The currently selected product category.
 * @param {boolean} props.showAllProducts - Whether to show all products or only the filtered ones.
 * @param {function} props.onCategoryClick - Callback function for when a category is clicked.
 * @returns {React.Element} The Products component.
 */
const Products = () => {
  const { selectedCategory, showAllProducts } = useContext(ProductsContext);

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
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = useMemo(() => {
    let productsToFilter = productsOriginal;

    if (!showAllProducts) {
      if (selectedCategory === "Sale") {
        productsToFilter = productsToFilter.filter(
          (product) => product.sale === true
        );
      } else if (selectedCategory) {
        productsToFilter = productsToFilter.filter(
          (product) => product.category.name === selectedCategory
        );
      }
    }

    if (searchTerm) {
      productsToFilter = productsToFilter.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return productsToFilter;
  }, [selectedCategory, productsOriginal, searchTerm, showAllProducts]);

  const [sortDirection, setSortDirection] = useState(null);

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    if (sortDirection === "asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortDirection === "desc") {
      sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
  }, [filteredProducts, sortDirection]);

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
      <Sidebar isBigScreen={isBigScreen} />
      <MainContent
        onSearchChange={setSearchTerm}
        theme={theme}
        buttonStyles={buttonStyles}
        sortButtonMenu={sortButtonMenu}
        sortAnchorEl={sortAnchorEl}
        sortSetAnchorEl={sortSetAnchorEl}
        handleSort={handleSort}
        isBigScreen={isBigScreen}
        sortedProducts={sortedProducts}
      />
    </Grid>
  );
};

export default Products;
