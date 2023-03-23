import React from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SearchBar from "./SearchBar";

const Menu = () => {
  const theme = useTheme();
  const menuBar = ["special offers", "hot drinks", "cold drinks", "food"];

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
          {menuBar.map((item) => (
            <ListItem
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
    </>
  );
};

export default Menu;
