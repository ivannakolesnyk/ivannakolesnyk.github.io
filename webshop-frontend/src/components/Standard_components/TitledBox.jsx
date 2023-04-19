import React from "react";
import { Box, Typography } from "@mui/material";

/**
 *
 * A custom Box component that displays a title.
 * @param {string} title - The title to be displayed in the Box.
 * @param {string} titleAlignment - The alignment of the title (left, center, or right).
 * @returns {JSX.Element} - The JSX code for the OrderBox component.
 */
const TitledBox = ({ title, titleAlignment = "left" }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: 2,
      }}
    >
      <Box sx={{ width: "100%", textAlign: titleAlignment }}>
        <Typography variant="h5" sx={{ color: "secondary.main" }}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default TitledBox;
