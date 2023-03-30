import React from "react";
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
import SearchBar from "./SearchBar";
import ProductCard from "./Products/ProductCard";

const menuBar = ["special offers", "hot drinks", "cold drinks", "food"];
let menu = [
  {
    name: "Hot drinks",
    products: [
      {
        id: 1,
        productName: "Coffee",
        sale: false,
        type: "Coffee",
        imagePath: "menu/cold_drink.png",
      },
      {
        id: 2,
        productName: "Coffee",
        sale: true,
        type: "Coffee",
        imagePath: "menu/cold_drink.png",
      },
      {
        id: 3,
        productName: "Coffee",
        sale: false,
        type: "Coffee",
        imagePath: "menu/cold_drink.png",
      },
      {
        id: 4,
        productName: "Tea",
        sale: false,
        type: "Tea",
        imagePath: "menu/cold_drink.png",
      },
      {
        id: 5,
        productName: "Tea",
        sale: true,
        type: "Tea",
        imagePath: "menu/cold_drink.png",
      },
      {
        id: 6,
        productName: "Tea",
        sale: true,
        type: "Tea",
        imagePath: "menu/cold_drink.png",
      },
    ],
  },
  {
    name: "Cold drinks",
    products: [
      {
        id: 1,
        productName: "Coffee",
        sale: false,
        type: "Coffee",
        imagePath: "menu/cold_drink.png",
      },
      {
        id: 2,
        productName: "Coffee",
        sale: true,
        type: "Coffee",
        imagePath: "menu/cold_drink.png",
      },
      {
        id: 3,
        productName: "Coffee",
        sale: false,
        type: "Coffee",
        imagePath: "menu/cold_drink.png",
      },
      {
        id: 4,
        productName: "Tea",
        sale: false,
        type: "Tea",
        imagePath: "menu/cold_drink.png",
      },
      {
        id: 5,
        productName: "Tea",
        sale: true,
        type: "Tea",
        imagePath: "menu/cold_drink.png",
      },
      {
        id: 6,
        productName: "Tea",
        sale: true,
        type: "Tea",
        imagePath: "menu/cold_drink.png",
      },
    ],
  },
];

const Menu = () => {
  const theme = useTheme();
  const buttonStyles = {
    borderRadius: "1.2rem",
    padding: "1.2rem 2.4rem",
    color: theme.palette.secondary.main,
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
          <SearchBar />
        </Box>
      </Box>

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
              <Button sx={{ padding: 0 }}>
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
          key={index}
        >
          <Typography
            variant="h2"
            mb={"2rem"}
            color={theme.palette.primary.contrastText}
          >
            {name}
          </Typography>
          <Grid container spacing={2.5}>
            {products.map(({ id, productName, imagePath }) => (
              <Grid item key={id} xs={12} sm={6} md={4} lg={4}>
                <ProductCard productName={productName} imagePath={imagePath} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
            <Button variant="outlined" color="secondary" sx={buttonStyles}>
              <Typography
                variant="button"
                sx={{ borderBottom: ".2rem solid #1F3A33" }}
              >
                VIEW ALL(20)
              </Typography>
            </Button>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default Menu;
