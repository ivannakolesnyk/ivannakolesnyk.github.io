import { Box, Grid, List } from "@mui/material";
import React, { useState } from "react";
import ProductCard from "../Products/Product/ProductCard";
import MenuHeader from "./MenuHeader";
import MenuItem from "./MenuItem";
import MenuSearchResults from "./MenuSearchResults";
import MenuSection from "./MenuSection";
import { menu, menuBar } from "./menuData";

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const sliceMenuItems = (products) => {
    return products.slice(0, 3);
  };

  const renderMenuItems = (filteredProducts) => (
    <Grid container spacing={2.5}>
      {filteredProducts.map(({ id, productName, imagePath }) => (
        <Grid item key={id} xs={12} sm={6} md={4} lg={4}>
          <Box textAlign={"center"}>
            <ProductCard
              productName={productName}
              imagePath={imagePath}
              isClickable={false}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );

  const sectionRefs = menu.map(() => React.createRef());
  const scrollToSection = (index) => {
    sectionRefs[index].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleViewAllClick = (categoryName) => {
    if (expandedCategory === categoryName) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryName);
    }
  };

  const renderCategoryItems = (categoryName, products) => {
    if (expandedCategory === categoryName) {
      return renderMenuItems(products);
    } else {
      return renderMenuItems(sliceMenuItems(products));
    }
  };

  return (
    <>
      <MenuHeader onSearchChange={handleSearchChange} />
      {searchTerm ? (
        <MenuSearchResults
          searchTerm={searchTerm}
          renderMenuItems={renderMenuItems}
          filteredProducts={menu
            .reduce((acc, { products }) => acc.concat(products), [])
            .filter((product) =>
              product.productName
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            )}
        />
      ) : (
        <>
          <Box
            sx={{
              padding: "2.4rem 13.2rem",
              borderTop: ".3rem solid #1F3A33",
              borderBottom: ".3rem solid #1F3A33",
            }}
          >
            <List
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 0,
              }}
            >
              {menuBar.map((item, index) => (
                <MenuItem
                  key={index}
                  item={item}
                  onClick={() => scrollToSection(index)}
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
