import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useRef, useState } from "react";
import SearchBar from "./Products/Controls/SearchBar";
import ProductCard from "./Products/Product/ProductCard";
import { menu, menuBar } from "./menuData";

const Menu = () => {
  const theme = useTheme();
  const buttonStyles = {
    borderRadius: "1.2rem",
    padding: "1.2rem 2.4rem",
    color: theme.palette.secondary.main,
  };
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

  const sectionRefs = useRef(menu.map(() => React.createRef()));
  const scrollToSection = (index) => {
    sectionRefs.current[index].current.scrollIntoView({
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
      <Box
        sx={{
          padding: "6.4rem 13.2rem",
          bgcolor: theme.palette.primary.main,
        }}
      >
        <Box
          sx={{
            color: theme.palette.primary.contrastText,
            width: "50%",
          }}
        >
          <Typography variant="h1" mb={"2rem"}>
            Menu
          </Typography>
          <Typography variant="body1" mb={"2rem"}>
            Indulge in the rich flavors of our handcrafted coffee creations -
            One sip, and you'll be hooked!
          </Typography>
          <SearchBar onSearchChange={handleSearchChange} />
        </Box>
      </Box>
      {searchTerm ? (
        // Render "Search results" and filtered menu items if searchTerm is not empty
        <>
          <Box
            sx={{
              padding: "6.4rem 13.2rem",
            }}
          >
            <Typography
              variant="h2"
              mb={"2rem"}
              color={theme.palette.primary.contrastText}
            >
              Search results
            </Typography>
            {renderMenuItems(
              menu
                // Replace flatMap with reduce
                .reduce((acc, { products }) => acc.concat(products), [])
                .filter((product) =>
                  product.productName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                )
            )}
          </Box>
        </>
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
                <ListItem
                  key={index}
                  sx={{
                    padding: 0,
                    width: "auto",
                  }}
                >
                  <Button
                    sx={{ padding: 0 }}
                    onClick={() => scrollToSection(index)}
                  >
                    <ListItemText
                      primary={item.toUpperCase()}
                      sx={{ padding: 0, color: "primary.contrastText" }}
                    />
                  </Button>
                </ListItem>
              ))}
            </List>
          </Box>

          {menu.map(({ name, products }, index) => (
            <Box
              sx={{
                padding: "6.4rem 13.2rem",
              }}
              ref={sectionRefs.current[index]}
              key={index}
            >
              <Typography
                variant="h2"
                mb={"2rem"}
                color={theme.palette.primary.contrastText}
              >
                {name}
              </Typography>
              {renderCategoryItems(name, products)}
              <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
                {expandedCategory !== name && (
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={buttonStyles}
                    onClick={() => handleViewAllClick(name)}
                  >
                    <Typography
                      variant="button"
                      sx={{ borderBottom: ".2rem solid #1F3A33" }}
                    >
                      {`VIEW ALL(${
                        products.length - 3 > 0 ? products.length - 3 : 0
                      })`}
                    </Typography>
                  </Button>
                )}
              </Box>
            </Box>
          ))}
        </>
      )}
    </>
  );
};

export default Menu;
