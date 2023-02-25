import { Box } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box bgcolor={theme.palette.primary.main} p={2}>
      Footer
    </Box>
  );
};

export default Footer;
