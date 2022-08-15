import { useEffect } from "react";
import { locationList } from "data/mapLocations";
import { latLng } from "leaflet";

export const LocationTracker = ({ location, visited, setVisited }) => {
  useEffect(() => {
    const current = latLng(location);
    for (const location of locationList) {
      if (location.id in visited) continue;
      const distance = current.distanceTo(location);
      if (distance < 50) {
        setVisited({ ...visited, [location.id]: Date.now() });
      }
    }
  }, [location, visited, setVisited]);

  return false;
};
