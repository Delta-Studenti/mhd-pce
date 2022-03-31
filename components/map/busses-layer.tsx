import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import { CircleMarker, Marker, Popup } from "react-leaflet";
import { useQuery } from "react-query";
import getBusses from "../../src/queries/get-busses";
import BusMarker from "./bus/bus";

const BussesLayer: React.FC = () => {
  const { data, isLoading, isFetching } = useQuery("busses", getBusses, {
    refetchInterval: 10000,
    cacheTime: 0,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
  });

  if (isLoading) return <div>Loading...</div>;

  if (!data) return null;

  const { data: busses } = data;
  return (
    <>
      {busses?.map((bus, i) => (
        <BusMarker bus={bus} key={bus.vid} />
      ))}
      {isFetching && (
        <Box
          sx={{ display: "flex", justifyContent: "center" }}
          className="fetcher"
        >
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default BussesLayer;
