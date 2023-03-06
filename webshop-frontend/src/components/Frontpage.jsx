import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const Frontpage = () => {
  const theme = useTheme();

  return (
    <Box bgcolor="white" flex={1} p={2}>
      <Typography variant="h3">
        This is the front page (Frontpage.jsx), and this shows how you can use
        the theme colors:<br></br>
      </Typography>
      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          display: "inline",
          color: theme.palette.primary.contrastText,
          fontSize: "1.6rem",
        }}
      >
        Primary main color as background, primary contrast text color for the
        text.
        <br></br>
      </Box>
      <Box
        sx={{
          bgcolor: theme.palette.secondary.main,
          display: "inline",
          color: theme.palette.secondary.contrastText,
          fontSize: "1.6rem",
        }}
      >
        Secondary main color as background, secondary contrast text color for
        the text.
        <br></br>
      </Box>
    </Box>
  );
};

export default Frontpage;
