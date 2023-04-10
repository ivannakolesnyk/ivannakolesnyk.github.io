import React from "react";
import { Box } from "@mui/material";

/**
 *
 * StandardCenteredBox is a custom React functional component that wraps the Box
 * component from the Material-UI library. This component is designed to center
 * its child elements both horizontally and vertically within a container, with
 * a standardized padding at the top and bottom.
 * It accepts a single 'children' prop which contains the child elements to be
 * rendered inside the centered box.
 * @returns {JSX.Element} The JSX code for the StandardCenteredBox component.
 */
const StandardCenteredBox = ({ children }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      paddingTop: "2rem",
      marginBottom: "2rem",
    }}
  >
    {children}
  </Box>
);

export default StandardCenteredBox;
