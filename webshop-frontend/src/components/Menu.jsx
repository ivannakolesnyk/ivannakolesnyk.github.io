import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Menu = () => {
  const theme = useTheme();

  return (
    <Box sx={{ p: 2, color: theme.palette.primary.contrastText }}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Our Menu
      </Typography>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Coffee
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        - Espresso
        <br />
        - Americano
        <br />
        - Latte
        <br />
        - Cappuccino
        <br />- Macchiato
      </Typography>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Tea
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        - Black tea
        <br />
        - Green tea
        <br />- Herbal tea
      </Typography>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Pastries
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        - Croissant
        <br />
        - Pain au chocolat
        <br />- Cinnamon roll
      </Typography>
    </Box>
  );
};

export default Menu;
