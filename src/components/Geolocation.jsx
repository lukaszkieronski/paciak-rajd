import { useEffect } from "react";
import { latLng } from "leaflet"
import { defaults } from 'data/defaults'

export const Geolocation = ({ location, setLocation }) => {
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const current = latLng(position.coords.latitude, position.coords.longitude)
        if (current && current.distanceTo(location) > defaults.locationUpdateDistance) {
          setLocation(current);
        }
      },
      (error) => {
        console.error(error)
      },
      { enableHighAccuracy: true }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, [setLocation, location]);

  return false;
};
