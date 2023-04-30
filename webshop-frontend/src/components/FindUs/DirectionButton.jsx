import { Box, Button, Typography } from "@mui/material";
import DirectionsIcon from "@mui/icons-material/Directions";
import React from "react";

/**
 *
 * The DirectionButton component is a React functional component used for displaying
 * a button with address information and a directions icon. When clicked, it opens
 * Google Maps in a new tab with the specified address as the destination. This
 * component is typically used in conjunction with a Google Map to provide users
 * with a visual representation of a location and an easy way to get directions.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.address - The address to display and use for getting directions.
 * @param {Function} props.onGetDirections - The function called when the button is clicked.
 * @returns {JSX.Element} The JSX code for the DirectionButton component.
 */
export const DirectionButton = ({ address, onGetDirections }) => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        borderRadius: 5,
        padding: "35px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        textAlign: "left",
        position: "absolute",
        top: "20%",
        left: "35%",
        transform: "translate(-30%, -50%)",
        zIndex: 1,
        "& > *": {
          margin: "10px 0",
        },
      }}
    >
      <Typography variant="h3" color="primary.contrastText">
        Find Us
      </Typography>
      <Typography
        variant="body1"
        color="primary.contrastText"
        sx={{ textAlign: "left", width: "100%", mt: 2 }}
      >
        {address}
      </Typography>
      <Button
        variant="contained"
        endIcon={<DirectionsIcon />}
        onClick={onGetDirections}
        sx={{
          mt: 2,
          backgroundColor: "secondary.main",
          color: "secondary.contrastText",
        }}
      >
        Get direction
      </Button>
    </Box>
  );
};
