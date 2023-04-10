import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
      }}
    >
      <CircularProgress sx={(theme) => ({ marginBottom: theme.spacing(2) })} />
      <Typography variant="h6">Loading...</Typography>
    </Box>
  );
};

export default Loading;
