import React, { useCallback, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import DirectionsIcon from "@mui/icons-material/Directions";

//For placing Direction Butoon component right on top of the Google Map, used wraping both the GoogleMap and DirectionButton components inside a container element and use CSS to position the last one over the map.
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
            // last two lines used for spacing between text
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

//Function for implementation the Google maps to the page
const FindUs = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDPk_iIoIf7gKWMTEdQ6G5OzlwrmxJ-TpY",
    libraries: ["places"],
  });

  const mapRef = useRef(null);
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
    // Used the useRef hook for getting a reference to the Google Map object. When the onLoad event of the GoogleMap component is triggered, the onMapLoad function is called, which updates the mapRef value with the reference to the Google Map object. This reference is used later in the component to interact with the map, such as adding markers, controlling zoom levels, etc.

    //The useCallback hook is used to memoize the onMapLoad function so that it doesn't change on every render. If the onMapLoad function was not memoized with useCallback, it would be recreated on every render, and as a result, the GoogleMap component would think that it needs to be reloaded every time the function changes. This would cause unnecessary re-renders and could lead to performance issues. By using useCallback, the onMapLoad function is only created once and memoized for future use, which helps to avoid unnecessary re-renders.
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
        }} // Open a new tab with your path in Google Maps after click on the button
      />
    </div>
  );
};

export default FindUs;
