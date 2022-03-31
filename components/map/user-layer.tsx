import React from "react";
import { CircleMarker, Popup } from "react-leaflet";
import useGeolocation from "react-hook-geolocation";

const UserLayer: React.FC = () => {
  const { latitude, longitude, timestamp, accuracy, error, heading } =
    useGeolocation();

  if (error || !latitude || !longitude) return null;

  return (
    <div>
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
    </div>
  );
};

export default UserLayer;
