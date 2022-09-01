import React, { useEffect, useRef, useState } from "react";
import { map, marker, tileLayer, circle } from "leaflet";
import "leaflet/dist/leaflet.css";

import { locationList, mapLocations } from "data/mapLocations";
import { HomeIcon, CurrentPositionIcon } from "./MarkerIcons";
import { Fab } from "@mui/material";
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import GpsNotFixedIcon from '@mui/icons-material/GpsNotFixed';
import { defaults } from "data/defaults";

export const Map = ({ location, visited }) => {
  const _map = useRef();
  const _currentPos = useRef();
  const _homePos = useRef();
  const _markers = useRef([]);

  const [follow, setFollow] = useState(true);

  useEffect(() => {
    _map.current = map("map").setView(mapLocations.Rueda, 17);
    tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
    }).addTo(_map.current);

    _homePos.current = marker(mapLocations.Rueda, { icon: HomeIcon }).addTo(
      _map.current
    );
    _currentPos.current = marker(mapLocations.Rueda, {
      icon: CurrentPositionIcon,
    }).addTo(_map.current);

    for (const pos of locationList) {
      _markers.current[pos.id] = circle(pos, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: defaults.locationCircleRadius
      }).addTo(_map.current);
    }

    _map.current.on('dragstart', () => {
      setFollow(false)
    })

    return () => {
      _map.current.stopLocate();
      _map.current.remove();
    };
  }, []);

  useEffect(() => {
    for (const id in visited) {
      _markers.current[id].remove();
    }
  }, [visited]);

  useEffect(() => {
    try {
      _currentPos.current.setLatLng(location);
      if (follow) {
        _map.current.panTo(location);
      }
    } catch (error) {
      console.error(error);
    }
  }, [location, follow]);

  const toggleFollow = () => {
    setFollow(!follow)
  }


  return (
    <React.Fragment>
      <Fab sx={{ zIndex: 2, position: "absolute", left: 16, bottom: 16 }} onClick={toggleFollow}>
        {follow ? <GpsFixedIcon /> : <GpsNotFixedIcon />}
      </Fab>
      <div id="map" style={{ width: "100%", height: "100%", zIndex: 1 }}></div>
    </React.Fragment>
  );
};

export default Map;
