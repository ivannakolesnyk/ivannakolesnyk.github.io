import React from "react";
import { Box, Typography } from "@mui/material";

/**
 *
 * A custom Box component that displays a title.
 * @param {string} title - The title to be displayed in the Box.
 * @returns {JSX.Element} - The JSX code for the OrderBox component.
 */
const TitledBox = ({ title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: 2,
      }}
    >
      <Typography variant="h5" sx={{ color: "secondary.main" }}>
        {title}
      </Typography>
    </Box>
  );
};

export default TitledBox;
