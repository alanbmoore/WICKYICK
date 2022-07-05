import React, { useState, useCallback } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const mapStyles = {
  width: "50%",
  height: "50%",
};

function MapContainer({ markers }) {
  const [center, setCenter] = useState({
    lng: -122.6067583,
    lat: 45.3573429,
  });

  useCallback(() => {
    const { markers } = props;

    const center =
      markers.length > 0 && marmarkersker[0]
        ? {
            lng: markers.length > 0 && markers[0]?.longitude,
            lat: markers.length > 0 && markers[0]?.latitude,
          }
        : {
            lng: -122.6067583,
            lat: 45.3573429,
          };
    setCenter(center);
  }, [markers]);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} center={center} zoom={14}>
        {/* Child components, such as markers, info windows, etc. */}
        {markers.map((marker) => {
          return (
            <Marker key={marker?.id} position={center}>
              <InfoWindow position={center}>
                <div>{marker?.shelter}</div>
              </InfoWindow>
            </Marker>
          );
        })}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;
