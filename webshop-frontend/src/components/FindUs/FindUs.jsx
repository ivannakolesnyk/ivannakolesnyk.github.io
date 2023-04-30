import React, { useCallback, useRef, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { DirectionButton } from "./DirectionButton";

/**
 *
 * The FindUs component is a React functional component used for displaying
 * a Google Map with a marker at a specific location. It includes a button
 * for getting directions to the location. This component is useful for
 * providing a visual representation of a physical location and helping
 * users navigate to it.
 * @returns {JSX.Element} The JSX code for the FindUs component.
 */
const FindUs = () => {
  // workaround found on github.com to avoid libraries prop being passed as a new array on each render
  const [libraries] = useState(["places"]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDPk_iIoIf7gKWMTEdQ6G5OzlwrmxJ-TpY",
    libraries,
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
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "calc(100vh - 60px - 40px)",
      }}
    >
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={{ lat: 62.47194, lng: 6.23559 }}
        zoom={15}
        onLoad={onMapLoad}
      >
        <Marker
          position={{ lat: 62.47194, lng: 6.23559 }}
          icon={{
            url: "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png",
            scaledSize: new window.google.maps.Size(25, 40),
          }}
        />
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
