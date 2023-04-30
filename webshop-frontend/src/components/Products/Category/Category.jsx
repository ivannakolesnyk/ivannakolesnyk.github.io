import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext";
import { categories } from "./categoryData";
import { useTheme } from "@emotion/react";

/**
 * Displays a list of product categories.
 * When a category is clicked, it triggers the handleCategoryClick function.
 */
const Category = () => {
  const { handleCategoryClick } = useContext(ProductsContext);
  const theme = useTheme();

  return (
    <Box>
      <Typography color={theme.palette.primary.contrastText} variant="h5">
        Categories
      </Typography>

      <List
        sx={{
          width: "100%",
          color: theme.palette.primary.contrastText,
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        aria-label="product categories"
      >
        {categories.map(({ name, icon: Icon }, index) => (
          <ListItemButton
            key={index}
            onClick={() => handleCategoryClick(name)}
            aria-label={`Select ${name} category`}
          >
            <ListItemIcon>
              <Icon
                sx={{
                  color: theme.palette.primary.contrastText,
                  fontSize: "3rem",
                }}
              ></Icon>
            </ListItemIcon>
            <ListItemText>
              <Typography fontSize={"2.5rem"}>{name}</Typography>
            </ListItemText>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Category;
