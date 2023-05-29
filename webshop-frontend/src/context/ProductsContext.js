import React, { createContext, useState } from "react";

/**
 * ProductsContext is the context for managing products filter state.
 */

export const ProductsContext = createContext();

/**
 * ProductsProvider component provides the state and methods for managing products filter.
 * @param {object} children - The child components to be wrapped with the ProductsProvider.
 * @returns {JSX.Element} - The JSX code for the ProductsProvider component.
 */
/**
 * ProductsProvider component provides the state and methods for managing products filter.
 * @param {object} children - The child components to be wrapped with the ProductsProvider.
 * @returns {JSX.Element} - The JSX code for the ProductsProvider component.
 */
export const ProductsProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showAllProducts, setShowAllProducts] = useState(false);

  const handleCategoryClick = (category) => {
    if (category === selectedCategory) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
      setShowAllProducts(false);
    }
  };

  const handleProductsClick = () => {
    setShowAllProducts(true);
    setSelectedCategory("");
  };

  return (
    <ProductsContext.Provider
      value={{
        selectedCategory,
        showAllProducts,
        handleCategoryClick,
        handleProductsClick,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
