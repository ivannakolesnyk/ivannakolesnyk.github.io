import { useTheme } from "@emotion/react";
import {
  EmojiFoodBeverage,
  LocalCafe,
  TrendingDown,
} from "@mui/icons-material";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext";

const MobileCategory = () => {
  const theme = useTheme();
  const { handleCategoryClick } = useContext(ProductsContext);

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

  return (
    <List
      sx={{
        width: "100%",
        color: theme.palette.primary.contrastText,
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <Stack direction={"row"} justifyContent={"space-around"}>
        {categories.map(({ name, icon: Icon }, index) => (
          <ListItemButton
            key={index}
            onClick={() => handleCategoryClick(name)}
            sx={{
              flexGrow: 0,
              "& .MuiListItemIcon-root, & .MuiListItemText-root": {
                display: "flex",
              },
              "& .MuiListItemIcon-root": {
                mr: -2, // adjust the spacing between the icon and text as needed
              },
              gap: 0,
              paddingTop: 0,
              paddingBottom: 0,
            }}
            disableGutters
          >
            <ListItemIcon>
              <Icon></Icon>
            </ListItemIcon>
            <ListItemText>
              <Typography fontSize={"2rem"}>{name}</Typography>
            </ListItemText>
          </ListItemButton>
        ))}
      </Stack>
    </List>
  );
};

export default MobileCategory;
