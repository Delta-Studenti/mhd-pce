import React from "react";
import { CircleMarker, Popup, useMap } from "react-leaflet";
import useGeolocation from "react-hook-geolocation";
import Fab from "@mui/material/Fab";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import styles from "@styles/mapControls.module.scss";

const UserLayer: React.FC = () => {
  const { latitude, longitude, timestamp, accuracy, error, heading } =
    useGeolocation({ enableHighAccuracy: true });

  const map = useMap();

  const move = () => {
    map.panTo([latitude, longitude]);
  };

  if (error || !latitude || !longitude) return null;

  return (
    <>
      <div className={styles.locationButton}>
        <Fab color="primary" aria-label="my-location" onClick={move}>
          <MyLocationIcon />
        </Fab>
      </div>
      <CircleMarker
        center={[latitude, longitude]}
        className="transition"
        radius={2}
        fillColor="#ff0000"
        color="#ff0000"
      >
        <Popup>
          <span>{`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`}</span>
          <br />
          <span>heading: {heading}</span>
          <br />
          <span>accuracy: {accuracy}</span>
        </Popup>
      </CircleMarker>
    </>
  );
};

export default UserLayer;
