import React, { useCallback, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import DirectionsIcon from "@mui/icons-material/Directions";

const DirectionButton = ({ address, onGetDirections }) => {
  return (
    <ThemeProvider theme={theme}>
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
          top: "35%",
          left: "17%",
          transform: "translate(-30%, -50%)",
          zIndex: 1,
          "& > *": {
            margin: "10px 0",
          },
        }}
      >
        <Typography variant="h3" color="secondary.contrastText">
          Find Us
        </Typography>
        <Typography
          variant="body1"
          color="secondary.contrastText"
          sx={{ textAlign: "left", width: "100%", mt: 2 }}
        >
          {address}
        </Typography>
        <Button
          variant="contained"
          endIcon={<DirectionsIcon />}
          onClick={onGetDirections}
          sx={{ mt: 2 }}
        >
          Get direction
        </Button>
      </Box>
    </ThemeProvider>
  );
};

const FindUs = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDPk_iIoIf7gKWMTEdQ6G5OzlwrmxJ-TpY",
    libraries: ["places"],
  });

  const mapRef = useRef(null);
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    <div style={{ position: "relative", width: "100%", height: "600px" }}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={{ lat: 62.47194, lng: 6.23559 }}
        zoom={15}
        onLoad={onMapLoad}
      >
        <Marker position={{ lat: 62.47194, lng: 6.23559 }} />
      </GoogleMap>
      <DirectionButton
        address="Larsgårdsvegen 2, 6009 Ålesund"
        onGetDirections={() => {
          const url = `https://www.google.com/maps/dir/?api=1&destination=Larsgårdsvegen+2,+6009+Ålesund`;
          window.open(url, "_blank");
        }}
      />
    </div>
  );
};

export default FindUs;
