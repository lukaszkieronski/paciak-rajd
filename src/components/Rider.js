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
  const [visited, setVisited] = useLocalStorage("visited", true, []);

  const elementProps = useMemo(() => {
    return { rider, setRider, location, visited };
  }, [rider, setRider, location, visited]);

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

  // return (
  //   <Container sx={{ pb: 7 }}>
  //     <Grid container spacing={2} sx={{ p: 2 }}>
  //       <Grid item sm={12}>
  //         <QrScanner setResult={setScanResult} />
  //       </Grid>
  //       {[...Array(50).keys()].map((i) => (
  //         <Grid key={i} item sm={6}>
  //           <Paper>{scanResult}</Paper>
  //         </Grid>
  //       ))}
  //     </Grid>
  //     <BottomNavigation
  //       showLabels
  //       sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
  //     >
  //       <BottomNavigationAction label="1" />
  //       <BottomNavigationAction label="2" />
  //       <BottomNavigationAction label="3" />
  //       <BottomNavigationAction label="4" />
  //     </BottomNavigation>
  //   </Container>
  // );

  return (
    <Box sx={{ height: "100vh", pb: 7 }}>
      <Geolocation setLocation={setLocation} />
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
      <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
        <Navigation />
      </Box>
    </Box>
  );
};
