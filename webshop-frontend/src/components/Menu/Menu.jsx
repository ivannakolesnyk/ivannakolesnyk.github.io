import { Box, Grid, List } from "@mui/material";
import React, { useState } from "react";
import ProductCard from "../Products/Product/ProductCard/ProductCard";
import MenuHeader from "./MenuHeader";
import MenuItem from "./MenuItem";
import MenuSearchResults from "./MenuSearchResults";
import MenuSection from "./MenuSection";
import { menu, menuBar } from "./menuData";
import styles from "./styles";

/**
 * Menu component represents the main menu of the application, displaying product categories
 * and allowing users to search for products.
 *
 * It consists of a header with a search bar, a menu bar with navigation items, and sections with product items.
 * When a search is performed, the component displays search results, otherwise, it displays the regular menu items.
 */
const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleSearchChange = (value) => setSearchTerm(value);
  const sectionRefs = menu.map(() => React.createRef());

  const handleViewAllClick = (categoryName) => {
    setExpandedCategory((prevCategory) =>
      prevCategory === categoryName ? null : categoryName
    );
  };

  const scrollToSection = (index) =>
    sectionRefs[index].current.scrollIntoView(styles.scroll);

  const renderMenuItems = (filteredProducts) => {
    return (
      <Grid container spacing={2.5} role="list">
        {filteredProducts.map(({ id, productName, imagePath, imageAlt }) => (
          <Grid item key={id} xs={12} sm={6} md={4} lg={4} role="listitem">
            <Box textAlign={"center"}>
              <ProductCard
                productName={productName}
                imagePath={`${process.env.PUBLIC_URL}/assets/img/${imagePath}`}
                imageAlt={imageAlt}
                isClickable={false}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  };

  const renderCategoryItems = (categoryName, products) => {
    const itemsToShow =
      expandedCategory === categoryName ? products : products.slice(0, 3);
    return renderMenuItems(itemsToShow);
  };

  return (
    <>
      <MenuHeader onSearchChange={handleSearchChange} />
      {searchTerm ? (
        <MenuSearchResults
          searchTerm={searchTerm}
          renderMenuItems={renderMenuItems}
          filteredProducts={menu
            .flatMap(({ products }) => products)
            .filter((product) =>
              product.productName
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            )}
        />
      ) : (
        <>
          <Box
            component="nav"
            sx={styles.navContainer}
            aria-label="Menu categories"
          >
            <List sx={styles.navList}>
              {menuBar.map((item, index) => (
                <MenuItem
                  key={index}
                  item={item}
                  onClick={() => scrollToSection(index)}
                  aria-label={`Scroll to ${item} section`}
                />
              ))}
            </List>
          </Box>

          {menu.map(({ name, products }, index) => (
            <MenuSection
              key={index}
              name={name}
              products={products}
              expandedCategory={expandedCategory}
              handleViewAllClick={handleViewAllClick}
              renderMenuItems={() => renderCategoryItems(name, products)}
              ref={sectionRefs[index]}
            />
          ))}
        </>
      )}
    </>
  );
};

export default Menu;
