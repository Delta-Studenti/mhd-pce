import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React from "react";
import type { LatLngExpression } from "leaflet";
import BussesLayer from "./busses-layer";
import UserLayer from "./user-layer";
import styles from "@styles/mapControls.module.scss";

const pardubiceCenter: LatLngExpression = [50.0375622, 15.7804176];

const Map: React.FC = () => {
  return (
    <div>
      <MapContainer
        center={pardubiceCenter}
        zoom={14}
        className={styles.mapContainer}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <BussesLayer />
        <UserLayer />
      </MapContainer>
    </div>
  );
};

export default Map;
