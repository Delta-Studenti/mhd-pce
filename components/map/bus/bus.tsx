import React from "react";
import { CircleMarker, Popup } from "react-leaflet";
import { DataEntity } from "src/types";

interface IProps {
  bus: DataEntity;
}

const BusMarker: React.FC<IProps> = ({ bus }) => {
  return (
    <>
      <CircleMarker
        center={[bus.gps_latitude, bus.gps_longitude]}
        className="transition"
      >
        <Popup>{bus.line_name}</Popup>
      </CircleMarker>
    </>
  );
};

export default BusMarker;
