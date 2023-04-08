import { useTheme } from "@emotion/react";
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
import { categories } from "./categoryData";

const MobileCategory = () => {
  const theme = useTheme();
  const { handleCategoryClick } = useContext(ProductsContext);

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
