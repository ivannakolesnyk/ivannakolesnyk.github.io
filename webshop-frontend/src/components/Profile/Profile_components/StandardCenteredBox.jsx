import React from "react";
import { Box } from "@mui/material";

const StandardCenteredBox = ({ children }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      paddingTop: "2rem",
      paddingBottom: "2rem",
    }}
  >
    {children}
  </Box>
);

export default StandardCenteredBox;
