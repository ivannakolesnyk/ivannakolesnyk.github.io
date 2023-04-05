import { useTheme } from "@emotion/react";
import {
  EmojiFoodBeverage,
  LocalCafe,
  TrendingDown,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Category = ({ onCategoryChange }) => {
  const theme = useTheme();

  const iconStyle = {
    color: theme.palette.primary.contrastText,
    fontSize: "3rem",
  };

  const categories = [
    {
      name: "Coffee",
      icon: () => <LocalCafe sx={iconStyle} />,
    },
    {
      name: "Tea",
      icon: () => <EmojiFoodBeverage sx={iconStyle} />,
    },
    {
      name: "Sale",
      icon: () => <TrendingDown sx={iconStyle} />,
    },
  ];

  const handleClick = (category) => {
    onCategoryChange(category);
  };

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
      >
        {categories.map(({ name, icon: Icon }, index) => (
          <ListItemButton key={index} onClick={() => handleClick(name)}>
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
