import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React from "react";
import type { LatLngExpression } from "leaflet";
import BussesLayer from "./busses-layer";
import UserLayer from "./user-layer";

const pardubiceCenter: LatLngExpression = [50.0375622, 15.7804176];

const Map: React.FC = () => {
  return (
    <div>
      <MapContainer
        center={pardubiceCenter}
        zoom={14}
        style={{ height: "93.2vh", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <BussesLayer />
        <UserLayer />
      </MapContainer>
    </div>
  );
};

export default Map;
