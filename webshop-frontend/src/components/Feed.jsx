import { Box } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const Feed = () => {
  const theme = useTheme();

  return (
    <Box bgcolor="white" flex={1} p={2}>
      This is the front page (feed.jsx):<br></br>
      <Box sx={{ bgcolor: theme.palette.primary.main, display: "inline" }}>
        Main color - Just to show you
        <br></br>
      </Box>
      <Box sx={{ bgcolor: theme.palette.secondary.main, display: "inline" }}>
        Secondary color - How you can use the theme colors
        <br></br>
      </Box>
    </Box>
  );
};

export default Feed;
