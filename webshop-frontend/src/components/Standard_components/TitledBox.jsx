import React from "react";
import { Box, Typography } from "@mui/material";

/**
 * TitledBox is a custom React functional component that wraps the Box
 * component from the Material-UI library. This component is designed to display
 * a title with customizable alignment (left, center, or right) inside the box.
 *
 * @param {Object} props The properties passed to the component.
 * @param {string} props.title The title to be displayed in the Box.
 * @param {string} [props.titleAlignment='left'] The alignment of the title (left, center, or right).
 * @returns {JSX.Element} The JSX code for the TitledBox component.
 */
const TitledBox = ({ title, titleAlignment = "left" }) => {
  return (
    <Box
      component="section"
      aria-labelledby="titled-box-title"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: 2,
      }}
    >
      <Box sx={{ width: "100%", textAlign: titleAlignment }}>
        <Typography
          id="titled-box-title"
          variant="h5"
          sx={{ color: "secondary.main" }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default TitledBox;
