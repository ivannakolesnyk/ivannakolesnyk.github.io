import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "600px",
};

const FindUs = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDPk_iIoIf7gKWMTEdQ6G5OzlwrmxJ-TpY",
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={{
        lat: 62.47194,
        lng: 6.23559,
      }}
      zoom={15}
    >
      <Marker position={"Larsgårdsvegen 2, 6009 Ålesund"} />
    </GoogleMap>
  );
};

export default FindUs;
