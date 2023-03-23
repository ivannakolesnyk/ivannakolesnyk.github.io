import React from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SearchBar from "./SearchBar";
import { Stack } from "@mui/system";

const Menu = () => {
  const theme = useTheme();

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
    </>
  );
};

export default Menu;
