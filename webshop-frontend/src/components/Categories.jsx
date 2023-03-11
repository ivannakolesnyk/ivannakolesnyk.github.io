import React from "react";
import { Typography } from "@mui/material";
import {
  EmojiFoodBeverage,
  LocalCafe,
  TrendingDown,
} from "@mui/icons-material";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import CakeIcon from "@mui/icons-material/Cake";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@emotion/react";

const Categories = () => {
  const theme = useTheme();

  const iconStyle = {
    color: theme.palette.primary.contrastText,
    fontSize: "3rem",
  };

  const categories = [
    {
      name: "Coffe",
      icon: () => <LocalCafe sx={iconStyle} />,
    },
    {
      name: "Tea",
      icon: () => <EmojiFoodBeverage sx={iconStyle} />,
    },
    {
      name: "Food",
      icon: () => <LocalDiningIcon sx={iconStyle} />,
    },
    {
      name: "Pastries",
      icon: () => <CakeIcon sx={iconStyle} />,
    },
    {
      name: "Sale",
      icon: () => <TrendingDown sx={iconStyle} />,
    },
  ];

  return (
    <>
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
        {categories.map(({ name, icon: Icon }) => (
          <ListItemButton>
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
    </>
  );
};

export default Categories;
