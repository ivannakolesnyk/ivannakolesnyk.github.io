import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";

export const PromoMessage = ({ theme }) => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: theme.palette.primary.contrastText,
        padding: "10px",
        borderRadius: "8px",
        textAlign: "center",
        justifySelf: "center",
        margin: "0 auto",
        marginBottom: "0.8rem",
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: "1.4rem",
            sm: "1.6rem",
            md: "1.8rem",
            lg: "2rem",
            xl: "2.2rem",
          },
        }}
      >
        Awaken your senses with every sip - Experience the perfect cup of coffee
        with us!
      </Typography>
    </Box>
  );
};
