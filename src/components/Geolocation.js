import { useEffect } from "react";
import { latLng } from "leaflet"

export const Geolocation = ({ location, setLocation }) => {
  const locationUpdateDistance = 2

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const current = latLng(position.coords.latitude, position.coords.longitude)
        if (current && current.distanceTo(location) > locationUpdateDistance) {
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
