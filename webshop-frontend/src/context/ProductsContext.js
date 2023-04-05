import React, { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showAllProducts, setShowAllProducts] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowAllProducts(false);
  };

  const handleProductsClick = () => {
    setShowAllProducts(true);
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
