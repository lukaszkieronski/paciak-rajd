import { useEffect } from "react";

export const Geolocation = ({ setLocation }) => {
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const latlng = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        setLocation(latlng);
      },
      (error) => {
        alert(error.message);
      },
      { enableHighAccuracy: true }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, [setLocation]);

  return false;
};
