import { useTheme } from "@emotion/react";
import {
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useContext } from "react";

import { ProductsContext } from "../../../context/ProductsContext";
import { categories } from "./categoryData";

const MobileCategory = () => {
  const theme = useTheme();
  const isBelow500px = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { handleCategoryClick } = useContext(ProductsContext);

  return (
    <List
      sx={{
        width: "100%",
        color: theme.palette.primary.contrastText,
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      aria-label="product categories"
    >
      <Grid container justifyContent={"space-around"}>
        {categories.map(({ name, icon: Icon }, index) => (
          <Grid
            item
            xs={isBelow500px ? 6 : "auto"}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ListItemButton
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
              aria-label={`Select ${name} category`}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText>
                <Typography fontSize={"2rem"}>{name}</Typography>
              </ListItemText>
            </ListItemButton>
          </Grid>
        ))}
      </Grid>
    </List>
  );
};

export default MobileCategory;
