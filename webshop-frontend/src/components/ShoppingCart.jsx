import React from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ShoppingCart = () => {
  const theme = useTheme();
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          color: theme.palette.primary.contrastText,
          p: "2rem",
        }}
      >
        Shopping Cart
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: theme.palette.primary.contrastText,
          pl: "2rem",
          pr: "2rem",
          pb: "2rem",
        }}
      >
        Not yet implemented.
      </Typography>
    </>
  );
};

export default ShoppingCart;
