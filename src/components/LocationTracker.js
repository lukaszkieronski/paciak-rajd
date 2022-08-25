import { useEffect } from "react";
import { locationList } from "data/mapLocations";
import { latLng } from "leaflet";
import { defaults } from "defaults";

export const LocationTracker = ({ location, visited, setVisited }) => {
  useEffect(() => {
    const current = latLng(location);
    for (const location of locationList) {
      if (location.id in visited) continue;
      const distance = current.distanceTo(location);
      if (distance < defaults.locationCircleRadius) {
        setVisited({ ...visited, [location.id]: Date.now() });
      }
    }
  }, [location, visited, setVisited]);

  return false;
};
