import React, { useMemo } from "react";
import { useLocalStorage } from "hooks/useLocalStorage";
import { defaultLocation } from "data/mapLocations";
import { Geolocation } from "./Geolocation";
import { LocationTracker } from "./LocationTracker";
import { Navigation } from "./Navigation";
import { Route, Routes, Navigate } from "react-router-dom";
import { navigationItems, defaultNavigation } from "data/navigationItems";
import { Box } from "@mui/system";

export const Rider = ({ rider, setRider }) => {
  const [location, setLocation] = useLocalStorage(
    "location",
    true,
    defaultLocation
  );

  const [settings, setSettings] = useLocalStorage(
    "settings",
    true,
    {
      useGoogleMapsOnIos: false
    }
  )

  const [visited, setVisited] = useLocalStorage("visited", true, {});
  const [answers, setAnswers] = useLocalStorage("answers", true, {});


  const elementProps = useMemo(() => {
    return { rider, setRider, location, visited, setVisited, settings, setSettings, answers, setAnswers };
  }, [rider, setRider, location, visited, setVisited, settings, setSettings]);

  const generateRoutes = (item, index) => {
    const element = React.createElement(item.element, elementProps);
    return (
      <Route
        path={item.loc}
        element={element}
        key={index}
        location={location}
      />
    );
  };

  return (
    <Box sx={{ height: "100vh", pt: 7 }}>
      <Geolocation location={location} setLocation={setLocation} />
      <LocationTracker
        location={location}
        visited={visited}
        setVisited={setVisited}
      />
      <Box sx={{ width: "100%", height: "100%" }}>
        <Routes>
          {navigationItems.map(generateRoutes)}
          <Route path="*" element={<Navigate to={defaultNavigation} />} />
        </Routes>
      </Box>
      <Box sx={{ position: "fixed", top: 0, left: 0, right: 0 }}>
        <Navigation />
      </Box>
    </Box>
  );
};
